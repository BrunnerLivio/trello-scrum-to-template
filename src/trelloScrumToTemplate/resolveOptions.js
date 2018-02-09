const fs = require('fs');
const path = require('path');

const DEFAULT_VALUES = {
    BACKLOG_LIST_NAME: 'Backlog',
    TEMPLATE_PATH: 'default/html.template'
};

/**
 * Resolves default-template-paths to real absolute paths.
 * @param {string} templatePath The path which contains 'default'
 * @returns {string} Real useable absolute path of the template
 */
const resolveDefaultTemplate = (templatePath) => templatePath.replace('default/', path.join(__dirname, '../../templates/'))

/**
 * Resolves the template(-path) options and
 * returns the template.
 * @param {object} options The options of TrelloScrumToTemplate
 * @param {string?} options.templatePath The path of the template
 * @param {string?} options.template The template as string
 * 
 * @returns {string} The template file-content 
 */
function resolveTemplate(options) {
    let templatePath = options.templatePath;
    let template = options.template;

    if (!template && !templatePath)
        templatePath = DEFAULT_VALUES.TEMPLATE_PATH;

    if (templatePath) {
        templatePath = resolveDefaultTemplate(templatePath);
        template = fs.readFileSync(templatePath, 'utf8');
    }

    return template;
}


function resolveOptions(options) {
    options.backLogListName = options.backlogListName || DEFAULT_VALUES.BACKLOG_LIST_NAME;
    options.template = resolveTemplate(options);
    return options;
}

module.exports = resolveOptions;