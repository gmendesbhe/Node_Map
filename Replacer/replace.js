function getProperty(columnMetadata) {
    return `${columnMetadata.type[0].name} ${columnMetadata.name}` ;
}

module.exports = {
    
    /**
     * @param {string} template
     */
    replaceProperties: (template, columnsMetadata) => {
        let tempProperties = template;
        let regex = /(^(?: +|\t+)*.*?)(\(props\))(.*)/m;
        for (const key in columnsMetadata) {
            if (columnsMetadata.hasOwnProperty(key)) {
                const column = columnsMetadata[key];
                tempProperties = tempProperties.replace(regex, `$1${getProperty(column)}$3\r\n$1$2$3`);
            }
        }
        return tempProperties.replace(regex, '');
    },
    /**
     * @param {string} template
     */
    replacePatterns: (template) => {
        const patDic = require('../Configuration/replacingDictionary').PatternDictionary;
        let temporaryTemplate = template;
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