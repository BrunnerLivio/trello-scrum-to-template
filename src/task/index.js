const parseDescription = require('../shared/descriptionParser');

function getTaskLists(board, backlogListName) {
    return board.lists.filter(list => list.name !== backlogListName);
}

function getTasks(board, backlogListName) {
    const lists = getTaskLists(board, backlogListName);
    return lists
        .map(list => list.cards)
        .reduce((previous, current) => previous.concat(current), []);
}

function getTaskByLabelId(labelId, board, backlogListName) {
    const tasks = getTasks(board, backlogListName);
    return tasks
        .filter(task => task.labels.find(label => label.id === labelId))
        .map(task => ({
            name: task.name,
            ...parseDescription(task.desc)
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
        .map(task => ({
            ...task,
            // If undefined, use 0h
            duration: task.duration || '0h'
        }))
        .sort((a, b) => a.number - b.number);
}


module.exports = getTaskByLabelId;