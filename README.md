# Random Emails Generator

> Return n amount of random email addresses.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/abellsmythe/random-emails-generator/blob/master/LICENSE)

## Install

```bash
$ npm install --g random-emails-generator
```

## Usage

#### Generate a Single Random Email

```bash
$ random-emails-generator

# orlaith@commodo.schule
```

#### Generate a Single Random Email with email level *n*

```bash
$ random-emails-generator --email-level 2

# agatha.fernand@incididunt.sap
```

#### Generate a Single Random Email with domain level *n*

```bash
$ random-emails-generator --domain-level 2

# allyson@nulla.ullamco.cards
```

#### Generate a Single Random Email with a custom domain

```bash
$ random-emails-generator --domain toncho.dev

# salman@toncho.dev
```

#### Generate *n* Random Emails

``` bash
$ random-emails-generator --count 3

# beatrix@incididunt.boots, alfred@incididunt.boots, lucia@incididunt.boots
```

#### Generate *n* Random Emails with custom Separator

``` bash
$ random-emails-generator --count 3 --separator ' - '

# niki@anim.as - rich@anim.as - rydel@anim.as
```

#### Help

```bash
$ random-emails-generator --help

# or

$ random-emails-generator -h
```

> All the commands can be combined

## Author

- [Alton Bell Smythe](https://abellsmythe.me)
- [Toncho Dev](https://toncho.dev)