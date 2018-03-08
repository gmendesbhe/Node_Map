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
        return template.replace('(namespace)', require('./conf').Namespace);
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
    }
}