const fs = require('fs');



module.exports={
	/** Reads file async
	 * @param {string} aTemplatePath path to template file
	 * @param {function(NodeJS.ErrnoException,string):void} aTemplateCallback - function(err,data)
	 */
	readTemplate: function(aTemplatePath, aTemplateCallback){
		 fs.readFile(aTemplatePath, {encoding:'utf8'}, aTemplateCallback)
	},
	/** Reads file sync
	 * @param {string} templatePath path to template file
	 * @returns {string} File content 
	 */
	readTemplateSync: (templatePath)=>{
		 return fs.readFileSync(templatePath, {encoding:'utf8'});
	}
}
