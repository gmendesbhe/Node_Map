const config = require('./conf');
const reading = require('./readTemplate');
const writing = require('./writeTemplate');
const meta = require('./meta');
// console.log(config);

function a()  {
    let template = {};
    reading.readTemplate(config.CaminhoTemplateEntidade, writing.loadTemplate(template));
    meta.readMetadata(writing.writeTemplate(template));
}

a();
// console.log(template.readTemplateSync(config.CaminhoTemplateEntidade));