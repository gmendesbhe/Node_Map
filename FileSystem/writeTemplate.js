const fs = require('fs');
let written = false;


module.exports = {
    /**
     * Saves the template for later use
     * @param {Object} templateRef reference for where to store the template
     * @returns Function(err,data):void
     */
    loadTemplate: (templateRef) => {
        function load(err, data) {
            if (err) {
                throw err;
            }
            templateRef.template = data;
        }
        return load;
    },

    /**
     * writes the template to a file
     */
    writeTemplate: (templateRef) => {
        function write(err, result) {
            if (err) {
                throw err;
            }
            let interval = setInterval(() => {
                if (templateRef.template) {
                    const replacer = require('../Replacer/replace');
                    templateRef.final = replacer.replacePatterns(templateRef.template);// templateRef.template.replace('(namespace)', config.Namespace);
                    templateRef.final = replacer.replaceProperties(templateRef.final, result);
                    fs.writeFile('./saida.cs', templateRef.final, (err) => { console.error(err); })
                    written = true;
                }
                if (written) {
                    clearInterval(interval);
                    written = false;
                }
            },
                5000);
        }
        return write;
    }
    
}