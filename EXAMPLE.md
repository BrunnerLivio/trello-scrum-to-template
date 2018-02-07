# Example

The example [board on Trello](https://trello.com/b/e6ozhnNv/example-board)


## HTML

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET > index.html
```
## LaTeX

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET -t default/latex.template --usebrackets > backlog.tex
```

See output in [example-output.tex](https://github.com/BrunnerLivio/trello-scrum-to-template/blob/master/example-output.tex)

## Custom

```bash
trello-scrum-to-template --id e6ozhnNv --appkey TRELLO_APPKEY --secret TRELLO_SECRET -t ./my-template.template > backlog.tex
```