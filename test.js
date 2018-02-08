const LatexScrumToLatex = require('./src');

const data = LatexScrumToLatex({
    boardId: 'e6ozhnNv',
    appKey: '245dc64afe036e7bf0b842b10afc9493',
    secret: 'b7439ea8519cdb480725b828df4cde2b7a699bff7b62a0907fef1bf61a0f1753',
    templatePath: 'default/latex.template',
    useBrackets: true
});
