const fs = require('fs');
let written = false;


module.exports = {
    /**
     * Saves the template for later use
     * @param {Object} aTemplateRef reference for where to store the template
     * @returns {function(string,string):void} Function(err,data):void
     */
    loadTemplate: (aTemplateRef) => {
        function load(err, data) {
            if (err) {
                throw err;
            }
            aTemplateRef.template = data;
        }
        return load;
    },

    /** writes the template to an exit file
     * @param {Object} aTemplateRef reference for where to store the template
     * @returns {function(string,string):void} Function(err,data):void
     */
    writeTemplate: (aTemplateRef) => {
        function write(err, result) {
            if (err) {
                throw err;
            }
            let interval = setInterval(() => {
                if (aTemplateRef.template) {
                    const replacer = require('../Replacer/replace');
                    aTemplateRef.final = replacer.replacePatterns(aTemplateRef.template);
                    aTemplateRef.final = replacer.replaceProperties(aTemplateRef.final, result);
                    fs.writeFile('./saida.cs', aTemplateRef.final, (err) => { console.error(err); })
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