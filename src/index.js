const Trello = require('trello-node');
const getBacklogs = require('./backlog');
const convert2Latex = require('./convert2Latex');



/**
 * Converts Trello to Scrum
 * @param {string} url The Trello URL 
 */
function TrelloScrumToLatex(options) {
    const backlogListName = options.backlogListName || 'Backlog';
    const trello = new Trello(options.appKey, options.secret);
    return trello
        .getBoard(options.boardId)
        .then(board => getBacklogs(board, backlogListName))
        .then(backlogs => convert2Latex(backlogs));
}

module.exports = TrelloScrumToLatex;