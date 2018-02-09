#!/usr/bin/env node
const program = require('commander');
// @ts-ignore
const packageJson = require('../package.json');
const TrelloScrumToLatex = require('./index');

function main() {
    program
        .version(packageJson.version)
        .option('-i --id <id>', 'the board id of Trello')
        .option('-a --appkey <appkey>', 'the app key from Trello')
        .option('-s --secret <secret>', 'the secret of Trello')
        .option('-t --template <template>', 'the template path')
        .option('-b --backlog [backlog]', 'the name of the backlog list', 'Backlog')
        .option('--usebrackets', 'If the given jinja template uses double brackets for variables, instead of double curly braces')
        .parse(process.argv);

    if (!program.id) {
        console.error('You must enter the board id with --id [id]');
        return -1;
    }

    if (!program.appkey) {
        console.error('You must enter the Trello appkey with --appkey <appkey>')
        return -1;
    }

    if (!program.secret) {
        console.error('You must enter the Trello secret with --secret <secret>');
    }

    TrelloScrumToLatex({
        boardId: program.id,
        backlogListName: program.backlog,
        appKey: program.appkey,
        secret: program.secret,
        templatePath: program.template,
        useBrackets: program.usebrackets
    })
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

main();