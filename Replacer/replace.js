function getProperty(aColumnInfo) {
    return `${aColumnInfo.type[0].name} ${aColumnInfo.name}` ;
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
        const patDic = require('../Configuration/replacingDictionary').PatternDictionary;
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