function getProperty(columnMetadata) {
    let property = 'public virtual';
    ////////////////
    return property.concat('{ get; set; }');
}

module.exports = {
    /**
     * @param {string} template
     */
    replaceNamespace: (template) => {
        return template.replace('(namespace)', require('../DatabaseAccess/conf').Namespace);
    },
    /**
     * @param {string} template
     */
    replaceProperties: (template, columnsMetadata) => {
        let tempProperties = template;
        for (const key in columnsMetadata) {
            if (columnsMetadata.hasOwnProperty(key)) {
                const column = columnsMetadata[key];
                tempProperties = tempProperties.replace(/(^(?: +|\t+)*)(\(props\))/m, `$1${getProperty(column)}\r\n$1$2`);
            }
        }
        // for (const column of columnsMetadata) {
        //     tempProperties = tempProperties.replace('(props)', `${getProperty(column)}\n(props)`);
        // }
        return tempProperties.replace('(props)', '');
    },
    replacePatterns: (template) => {
        const patDic = require('./replacingDictionary').Dictionary;
        let temporaryTemplate = template;
        for (const pattern in patDic) {
            let regex = RegExp(eval(`/(^.*?)${pattern}(.*$)/`));
            if (patDic.hasOwnProperty(pattern)) {
                const element = patDic[pattern];
                temporaryTemplate = temporaryTemplate.replace(regex, `$1${element}$2`);
            }
        }
    }
}