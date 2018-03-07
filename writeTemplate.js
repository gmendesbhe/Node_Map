const fs = require('fs');
const config = require('./conf');
let Template='';
let written = false;

function test (metadata, tableName) {
    let interval = setInterval(() => {
        let csClass = require('./replace').replaceNamespace(Template);
        csClass
     },
        5000);
    if (written) {
        clearInterval(interval);
        written = false;
    };
}

module.exports = {
    /**
     * Saves the template for later use
     * @param err error
     * @param data Template to be saved
     */
    loadTemplate: (err, data) => {
        if (err) {
            throw err;
        }
        Template = data;
        test(err,data);
    },

    /**
     * writes the template to a file
     */
    writeTemplate: (err, result) => {
        if (err) {
            throw err;
        }
        let interval = setInterval(() => {
            Template.replace('(namespace)',config.Namespace)
         },
            5000);
        if (written) {
            clearInterval(interval);
            written = false;
        }
    }
}