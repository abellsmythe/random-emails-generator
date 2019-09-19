#!/usr/bin/env node
'use strict';

// Dependencies
const minimist = require('minimist');

const {
    getRandomEmail,
    getRandomDomain,
    print,
} = require('./helpers');

function init() {
    // CLI Arguments
    const args = minimist(
        process.argv.slice(2),
        {
            alias: {
                c: 'count',
                d: 'domain',
                dl: 'domain-level',
                el: 'email-level',
                h: 'help',
                s: 'separator',
            },
            default: {
                c: 1,
                dl: 1,
                el: 1,
                s: ', ',
            },
        }
    );

    if (args.help) {
        print('Random Emails Generator \n', 'cyan');
        print(`Arguments:
            --count         | -c    |   (default: 1)
            --domain        | -d    |  
            --domain-level  | -dl   |   (default: 1)
            --email-level   | -el   |   (default: 1)
            --help          | -h    |   
            --separator     | -s    |   (default: ', ')`,
            'yellow',
        );
        return;
    }

    const emailsAmount =
        args.count && Number.isInteger(Number(args.count))
            ? Number(args.count)
            : 1;

    const domain = args.domain || getRandomDomain(args.dl);

    const emails = new Array(emailsAmount);
    const data = emails
        .fill('')
        .map(() => getRandomEmail(domain, args.el))
        .join(args.separator);
    
    print(data);
}

init();