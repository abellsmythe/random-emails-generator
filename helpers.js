'use strict';

// Dependencies
const chalk = require('chalk');

const pick = require('./pick');

const nameList = require('./data/names.json');
const tldList = require('./data/tld-list.json');
const wordList = require('./data/words.json');

function getRandomTLD() {
    return pick(tldList);
}

function getRandomDomain(level = 1) {
    const parts = [];

    while (level--) {
        parts.push(pick(wordList));
    }

    // Add TLD
    parts.push(getRandomTLD());

    return parts.join('.').toLowerCase();
}

function getRandomEmail(domain = null, emailLevel = 1, domainLevel = 1) {
    const names = [];

    while (emailLevel--) {
        names.push(pick(nameList));
    }

    return `${names.join('.')}@${domain || getRandomDomain(domainLevel)}`.toLowerCase();
}

function print(data, color = 'green') {
    console.log(chalk[color](data));
}

module.exports = {
    getRandomDomain,
    getRandomEmail,
    getRandomTLD,
    print,
};