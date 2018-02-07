const Trello = require('trello-node');
const fs = require('fs');
const path = require('path');
const getBacklogs = require('./backlog');
const convert2Template = require('./convert2Template');

function resolveDefaultTemplate(templatePath) {
    // Default templates
    templatePath = templatePath.replace('default/', path.join(__dirname, '../templates/'));
    return templatePath;
}

function getTemplate(options) {
    let templatePath = options.templatePath;
    let template = options.template;   
 
    if (!template && !templatePath) {
        templatePath = 'default/html.template';
    }

    if (templatePath) {
        templatePath = resolveDefaultTemplate(templatePath);
        template = fs.readFileSync(templatePath, 'utf8');
    }

    return template;
}

/**
 * Converts Trello to Scrum
 * @param {string} url The Trello URL 
 */
function TrelloScrumToLatex(options) {
    return new Promise((resolve, reject) => {
        const backlogListName = options.backlogListName || 'Backlog';
        let useBrackets = options.useBrackets;
        let template = getTemplate(options);
        
        const trello = new Trello(options.appKey, options.secret);
        trello
            .getBoard(options.boardId)
            .then(board => getBacklogs(board, backlogListName))
            .then(backlogs => resolve(convert2Template(backlogs, template, useBrackets)))
            .catch(reject);
    });
}

module.exports = TrelloScrumToLatex;