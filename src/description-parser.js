function parseDescription(text) {
    const data = {};
    const regex = /(.*):\n(.*)/gm;
    let m;

    while ((m = regex.exec(text)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        data[m[1].toLowerCase().replace(' ', '_')] = m[2];
    }
    return data;
}

module.exports = parseDescription;