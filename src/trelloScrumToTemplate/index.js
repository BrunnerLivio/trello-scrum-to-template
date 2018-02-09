const Trello = require('trello-node');
const fs = require('fs');
const path = require('path');
const getBacklogs = require('../backlog');
const convert2Template = require('../shared/convert2Template');
const resolveOptions = require('./resolveOptions');

/**
 * Converts Trello to Scrum
 * 
 * @param {object} options Options for the convertor
 */
function TrelloScrumToTemplate(options) {
    options = resolveOptions(options);
    const trello = new Trello(options.appKey, options.secret);
    return trello
        // @ts-ignore
        .getBoard(options.boardId)
        .then(board => getBacklogs(board, options.backlogListName))
        .then(backlogs => convert2Template(backlogs, options.template, options.useBrackets))
}

module.exports = TrelloScrumToTemplate;