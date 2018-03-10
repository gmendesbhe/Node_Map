const paths = require('./Configuration/paths');
const reading = require('./FileSystem/readTemplate');
const writing = require('./FileSystem/writeTemplate');
const meta = require('./DatabaseAccess/meta');

function a()  {
    let template = {};
    reading.readTemplate(paths.TemplatePath, writing.loadTemplate(template));
    meta.readMetadata(writing.writeTemplate(template));
}

a();