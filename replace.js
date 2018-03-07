function getProperty(columnMetadata) {
    let string = 'public virtual';
    ////////////////
    return string.concat(string, '{ get; set; }');
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
        for (const column of columnsMetadata) {
            tempProperties = tempProperties.replace('(props)', `${getProperty(column)}\n(props)`);
        }
        return tempProperties.replace('(props)', '');
    }
}