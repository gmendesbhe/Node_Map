const dic = require('../Configuration/replacingDictionary');

function getClassProperty(aColumnInfo) {
    if (aColumnInfo.Column_name.match(dic.ExcludeFromClass)) {
        return null;
    }
    let columnType = aColumnInfo.Type;
    let type = dic.TypesDictionary[columnType] || columnType.toString();
    if (aColumnInfo.Nullable == 'yes'
        && type.endsWith('?')
        && dic.NullablePattern) {
        type = dic.NullablePattern.replace('__type__', type.substring(0, type.indexOf('?') - 1));
    }
    return `${type} ${aColumnInfo.Column_name}`;
}


module.exports = {

    /**
     * Writes the properties on the template, replacing __props__
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
                let property = getClassProperty(column);
                if (property) {
                    tempProperties = tempProperties.replace(regex, `$1${property}$3\r\n$1$2$3`);
                }
            }
        }
        return tempProperties.replace(regex, '');
    },
    /**
     * Replaces any patterns written on patternDic with it's value
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
    },
    /**
     * Writes the class name on the template, replacing __classname__
     * @param {string} aTemplate template where to replace stuff
     * @param {string} aClassName name of the class
     * @returns {string}
     */
    replaceClassName: (aTemplate, aClassName) => {
        let temporaryTemplate = aTemplate;
        let regex = /(^(?: +|\t+)*.*?)(__classname__)(.*)/m;
        temporaryTemplate = temporaryTemplate.replace(regex, `$1${aClassName}$3`);
        return temporaryTemplate;
    }
}