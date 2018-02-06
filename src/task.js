
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
    return tasks.filter(task => task.labels.find(label => label.id === labelId));
}


module.exports = getTaskByLabelId;