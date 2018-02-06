function task2Latex(task) {
    return `
    T1.1 &
    ${task.name} &
    1h & 1 \\\\
    `;
}


function tasks2Latex(tasks) {
    return tasks.map(task => task2Latex(task)).join('\n')
}

function backlog2Latex(backlog) {
    return `
\\subsection*{${backlog.name}}
\\sonerectangle

\\begin{tabularx}{\\textwidth}{ @{}>{\\hsize=.6\\hsize}X >{\\hsize=1.4\\hsize}X }
    {\\it\\large\\headingfont Nummer} & S${backlog.number} \\\\
    {\\it\\large\\headingfont \\gls{story point}} & ${backlog.storyPoints} \\\\
    {\\it\\large\\headingfont Anforderungen} & {\\it ${backlog.requirements}} \\\\
    {\\it\\large\\headingfont Priorität} & ${backlog.priority} \\\\
\\end{tabularx}

\\subsubsection*{Beschreibung}

${backlog.description}

\\subsubsection*{Tasks}

\\begin{tabularx}{\\textwidth}{ >{\\hsize=.5\\hsize}X >{\\hsize=2.5\\hsize}X >{\\hsize=.5\\hsize}X >{\\hsize=.5\\hsize}X }
    {\\bf Nummer} & {\\bf Beschreibung} & {\\bf Zeit} & {\\bf Priorität} \\\\
    
    ${tasks2Latex(backlog.tasks)}

    \\multicolumn{2}{X}{\\bf{Zeitsumme}} & \\multicolumn{2}{X}{4h}
\\end{tabularx}

\\subsubsection*{Akzeptanzkriterium}
${backlog.acceptanceCriterion}
`
}

function convert2Latex(backlogs) {
    return backlogs.map(backlog => backlog2Latex(backlog)).join('\n');
}

module.exports = convert2Latex;