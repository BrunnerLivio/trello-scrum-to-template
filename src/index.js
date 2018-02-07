const Trello = require('trello-node');
const fs = require('fs');
const path = require('path');
const getBacklogs = require('./backlog');
const convert2Template = require('./convert2Template');


/**
 * Converts Trello to Scrum
 * @param {string} url The Trello URL 
 */
function TrelloScrumToLatex(options) {
    return new Promise((resolve, reject) => {
        const backlogListName = options.backlogListName || 'Backlog';
        let template = options.template;
        let templatePath = options.templatePath;
        let useBrackets = options.useBrackets;
        if (!template && !templatePath) {
            useBrackets = true;
            templatePath = path.join(__dirname, '../default.tex.template');
        }
        if (templatePath) {
            template = fs.readFileSync(templatePath, 'utf8');
        }

        const trello = new Trello(options.appKey, options.secret);

        trello
            .getBoard(options.boardId)
            .then(board => getBacklogs(board, backlogListName))
            .then(backlogs => resolve(convert2Template(backlogs, template, useBrackets)))
            .catch(reject);
    });
}

module.exports = TrelloScrumToLatex;