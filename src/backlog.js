const getTaskByLabelId = require('./task');

function parse(text, regex) {
    const result = regex.exec(text);
    return (result && result.length === 2) ? result[1].trim() : null;
}

function getRawBacklogsFromBoard(board, backlogListName) {
    return board
        .lists
        .find(list => list.name === backlogListName)
        .cards;
}

function getBacklogs(board, backlogListName) {
    const backlogs = getRawBacklogsFromBoard(board, backlogListName);
    return backlogs.map(backlog => ({
        name: backlog.name,
        description: parse(backlog.desc, /Description:\n(.*)/gm),
        acceptanceCriterion: parse(backlog.desc, /Acceptance Criterion:\n(.*)/gm),
        requirements: parse(backlog.desc, /Requirements:(.*)/gm),
        storyPoints: parse(backlog.desc, /Story Points:(.*)/gm),
        number: parseInt(parse(backlog.desc, /Number:(.*)/gm)),
        priority: parseInt(parse(backlog.desc, /Priority:(.*)/gm)),
        tasks: getTaskByLabelId(backlog.idLabels[0], board, backlogListName)
    }));
}

module.exports = getBacklogs;