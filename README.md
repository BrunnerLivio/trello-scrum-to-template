# trello-scrum-to-template

Parses the Trello data and prints it in the given template

## Use Case

- Websites
- LaTeX Templates
- Documentations
- etc.

## Usage

1. Get your Trello appkey [from here](https://trello.com/app-key)
2. Get your Trello secret by click on "... you can manually generate a **Token**"

### CLI

```bash
trello-scrum-to-template --id YOUR_BOARD_ID --appkey TRELLO_APPKEY --secret TRELLO_SECRET [-b Backlog] [-t default/latex.template] [--usebrackets]
```

### NodeJS

```javascript
const TrelloScrumToTemplate = require('trello-scrum-to-template');

const data = await TrelloScrumToTemplate({
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

See [EXAMPLE.md](EXAMPLE.md)

## Installation

See [INSTALLATION.md](INSTALLATION.md)