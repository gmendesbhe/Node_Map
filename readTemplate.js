const fs = require('fs');



module.exports={
	/**
	 * Reads file async
	 * @param {string} templatePath - path to template file
	 * @param {function} callback - function(err,data)
	 * @returns void
	 */
	readTemplate: function(templatePath, templateCallback){
		 fs.readFile(templatePath, {encoding:'utf8'}, templateCallback)
	},
	/**
	 * Reads file sync
	 * @param {string} templatePath path to template file
	 * @returns File content 
	 */
	readTemplateSync: (templatePath)=>{
		 return fs.readFileSync(templatePath, {encoding:'utf8'});
	}
}
