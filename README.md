# trello-scrum-to-template

Parses the Trello data and prints it in the given template

## Use Cases

- Websites
- LaTeX Templates
- Documentations
- etc.

## Usage

1. Get your Trello appkey [from here](https://trello.com/app-key)
2. Get your Trello secret by click on "... you can manually generate a **Token**"

### CLI

```bash
trello-scrum-to-template --id YOUR_BOARD_ID --appkey TRELLO_APPKEY --secret TRELLO_SECRET [-b Backlog] [-t ./default.tex.template]
```

### NodeJS

```javascript
const TrelloScrumToLatex = require('trello-scrum-to-template');

const data = await TrelloScrumToLatex({
    id: '[YOUR BOARD ID]',
    appKey: '[TRELLO APPKEY]',
    secret: '[TRELLO SECRET]',
    backlogListName: 'Backlog',
    template: `
{% for backlog in backlogs %}
((backlog.name))
{% endfor %}
    `,
    useBrackets: true
});
```

## Example

The example [board on Trello](https://trello.com/b/e6ozhnNv/example-board)


### HTML

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET > index.html
```
### LaTeX

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET -t default/latex.template --usebrackets > backlog.tex
```

See output in [example-output.tex](https://github.com/BrunnerLivio/trello-scrum-to-template/blob/master/example-output.tex)

### Custom

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET -t ./my-template.template > backlog.tex
```

## Installation

```bash
npm i -g trello-scrum-to-template
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
