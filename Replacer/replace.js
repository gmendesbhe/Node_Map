const dic = require('../Configuration/replacingDictionary');

function getProperty(aColumnInfo) {
    let columnType = aColumnInfo.type[0].name;
    let type = dic.TypesDictionary[columnType] || columnType.toString();
    if (aColumnInfo.nullable && type.endsWith('?') && dic.NullablePattern) {
        type = dic.NullablePattern.replace('__type__', type);
    }
    return `${type} ${aColumnInfo.name}`;
}


module.exports = {

    /** Writes the properties on the template
     * @param {string} aTemplate template where to replace stuff
     * @param {JSON} aColumnsInfo column information in json format
     * @returns {string}
     */
    replaceProperties: (aTemplate, aColumnsInfo) => {
        let tempProperties = aTemplate;
        let regex = /(^(?: +|\t+)*.*?)(__props__)(.*)/m;
        for (const key in aColumnsInfo) {
            if (aColumnsInfo.hasOwnProperty(key)) {
                const column = aColumnsInfo[key];
                tempProperties = tempProperties.replace(regex, `$1${getProperty(column)}$3\r\n$1$2$3`);
            }
        }
        return tempProperties.replace(regex, '');
    },
    /** Replaces any patterns written on patternDic with it's value
     * @param {string} aTemplate template where to replace stuff
     * @returns {string}
     */
    replacePatterns: (aTemplate) => {
        let temporaryTemplate = aTemplate;
        const patDic = dic.PatternDictionary;
        for (const pattern in patDic) {
            let regex = eval(`/${pattern}/g`);
            if (patDic.hasOwnProperty(pattern)) {
                const element = patDic[pattern];
                temporaryTemplate = temporaryTemplate.replace(regex, `${element}`);
            }
        }
        return temporaryTemplate;
    }
}