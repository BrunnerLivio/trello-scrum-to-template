
const TrelloScrumToLatex = require('./src');

TrelloScrumToLatex({
    boardId: 'AnelONGe'
})
    .then(data => {
        console.log(data)
    })
    .catch(console.error);