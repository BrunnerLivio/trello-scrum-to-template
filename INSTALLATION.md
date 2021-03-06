# Installation

## Requirements

- NodeJS 8.x.x

## Installation from NPM

```bash
npm i -g trello-scrum-to-template
```

## Installation from Source

```bash
git clone https://github.com/BrunnerLivio/trello-scrum-to-template.git
cd trello-scrum-to-template
npm install
npm start
```

## Trello Setup

1. Create a new list called "Backlog" (can be configured with `-b` parameter).
2. Create a new card in the backlog-list and set a title.

    2.1. Add a description with the [backlog scheme](SCHEMES.md#backlog-scheme)

    2.2. Create a new label, with the same name as the backlog title
3. Create a new list with any name (e.g. "Todo") for the tasks
4. Create a new card in the new list and set a tasktitle.

    4.1 Add the same label, as the backlog you want to assign the task to

![Trello Example](https://raw.githubusercontent.com/BrunnerLivio/trello-scrum-to-template/master/.github/trello-example.png)

[See online example on Trello](https://trello.com/b/e6ozhnNv/example-board)
