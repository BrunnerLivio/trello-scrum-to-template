const nunjucks = require('nunjucks');
function convert2Template(backlogs, template, useBrackets) {
    let tags;
    if (useBrackets) {
        tags = {
            variableStart: '((',
            variableEnd: '))'
        };
    }
    nunjucks.configure({ autoescape: true, tags });
    return nunjucks.renderString(template, { backlogs });
}


module.exports = convert2Template;