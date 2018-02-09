const getTaskByLabelId = require('../task');
const parseDescription = require('../shared/descriptionParser');
const calculateTimeSum = require('../shared/calculateTimeSum');

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
    return backlogs
        .map(backlog => ({
            name: backlog.name,
            tasks: getTaskByLabelId(backlog.idLabels[0], board, backlogListName),
            ...parseDescription(backlog.desc)
        }))
        .map(backlog => ({
            ...backlog,
            timesum: calculateTimeSum(backlog.tasks.map(task => task.duration))
        }))
        .map(task => {
            if (!isNaN(task.number.trim())) {
                try {
                    task.number = parseInt(task.number)
                }
                catch (err) { }
            }
            return task;
        })
        .sort((a, b) => a.number - b.number);
}

module.exports = getBacklogs;