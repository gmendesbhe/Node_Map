const sql = require('mssql');

const config = require('./conf').sqlConnection;

const template = require('./readTemplate');


module.exports = {
    readMetadata: (callback) => {
        let result = {
            first: {
                index: 0,
                name: 'first',
                length: 17,
                type: [sql.Decimal],
                scale: 4,
                precision: 18,
                nullable: true,
                caseSensitive: false,
                identity: false,
                readOnly: true
            },
            second: {
                index: 1,
                name: 'second',
                length: 4,
                type: [sql.VarChar],
                nullable: false,
                caseSensitive: false,
                identity: false,
                readOnly: true
            }
        };

        callback.call(null, null, result);
    }
}

