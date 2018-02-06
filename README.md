# trello-scrum-to-latex

Parses the Trello JSON data and writes it in LaTeX style format

## Installation

```bash
npm i -g trello-scrum-to-latex
```

## Trello Setup

1. Create a new list called "Backlog" (can be configured with `-b` parameter).
2. Create a new card in the backlog-list and set a title.

    2.1. Add a description with the [backlog scheme](SCHEMES.md#backlog-scheme)

    2.2. Create a new label, with the same name as the backlog title
3. Create a new list with any name (e.g. "Todo") for the tasks
4. Create a new card in the new list and set a tasktitle.

    4.1 Add the same label, as the backlog you want to assign the task to

![Trello Example](https://raw.githubusercontent.com/BrunnerLivio/trello-scrum-to-latex/master/.github/trello-example.png)


## Usage

1. Get your Trello appkey [from here](https://trello.com/app-key)
2. Get your Trello secret by click on "... you can manually generate a **Token**"

### CLI

```bash
trello-scrum-to-latex --id [YOUR BOARD ID] --appkey [TRELLO APPKEY] --secret [TRELLO SECRET] -b Backlog
```

#### NodeJS

```javascript
const TrelloScrumToLatex = require('trello-scrum-to-latex');

const data = await TrelloScrumToLatex({
    id: '[YOUR BOARD ID]',
    appKey: '[TRELLO APPKEY]',
    secret: '[TRELLO SECRET]',
    backlogListName: 'Backlog'
});
```