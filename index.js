const config = require('./DatabaseAccess/conf');
const reading = require('./FileSystem/readTemplate');
const writing = require('./FileSystem/writeTemplate');
const meta = require('./DatabaseAccess/meta');

function a()  {
    let template = {};
    reading.readTemplate(config.CaminhoTemplateEntidade, writing.loadTemplate(template));
    meta.readMetadata(writing.writeTemplate(template));
}

a();