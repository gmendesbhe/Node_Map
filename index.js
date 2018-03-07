const config = require('./conf');
const template = require('./readTemplate');
const writing = require('./writeTemplate');
console.log(config);


template.readTemplate(config.CaminhoTemplateEntidade, writing.loadTemplate);


console.log(template.readTemplateSync(config.CaminhoTemplateEntidade));