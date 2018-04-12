
const sql = require('mssql');

const config = require('../Configuration/databaseConfig');

/**
 * Writes the where clause
 * @param {string} aQuery original 'where-less' query
 * @param {string|string[]} aTables tables to compose where clause
 * @returns {string} complete query
 */
function getWhereClause(aQuery, aTables) {
    if (aTables) {
        if (typeof aTables !== 'string' && !Array.isArray(aTables)) {
            throw Error('Table name informed is not strings');
        }
        let q = aQuery.concat(' WHERE TABLE_NAME ');
        if (Array.isArray(aTables)) {
            return q.concat(`IN ('${aTables.join('\',\'')}')`);
        }
        if (aTables.includes('%')) {
            return q.concat(`LIKE '${aTables}'`)
        }
        return q.concat(`= '${aTables}'`)
    }
    return aQuery;
}


module.exports = {
    /** 
     * Reads info from each table in database
     * @param {function(string,string):void} aCallback
     */
    readMetadata: (aCallback) => {
        const pool = new sql.ConnectionPool(config.config);
        pool.connect((err) => {
            if (err) {
                console.error(err);
                return;
            }
            const requestTables = new sql.Request(pool);
            let query = 'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES';
            query = getWhereClause(query, config.tables);
            requestTables.query(query, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                for (const table of result.recordsets) {
                    const requestInfo = new sql.Request(pool);
                    requestInfo.query(`sp_help ${table[0].TABLE_NAME}`, aCallback);
                }
            });
        });

        // // Testing
        // let result = {
        //     recordsets: [
        //         [
        //             {
        //                 Name: "TABLE_ONE",
        //                 Owner: "dbo",
        //                 Type: "user table",
        //                 Created_datetime: "2018-03-08T16:57:38.097Z"
        //             }
        //         ],
        //         [
        //             {
        //                 Column_name: "COLUMN_ONE",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 25,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "no",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_TWO",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 30,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "no",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_THREE",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 15,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "yes",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_FOUR",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 20,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "no",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_FIVE",
        //                 Type: "numeric",
        //                 Computed: "no",
        //                 Length: 5,
        //                 Prec: "5    ",
        //                 Scale: "0    ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_SIX",
        //                 Type: "numeric",
        //                 Computed: "no",
        //                 Length: 9,
        //                 Prec: "10   ",
        //                 Scale: "0    ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_SEVEN",
        //                 Type: "numeric",
        //                 Computed: "no",
        //                 Length: 9,
        //                 Prec: "10   ",
        //                 Scale: "0    ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_EIGHT",
        //                 Type: "numeric",
        //                 Computed: "no",
        //                 Length: 9,
        //                 Prec: "10   ",
        //                 Scale: "0    ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_NINE",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 6,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "no",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_TEN",
        //                 Type: "datetime",
        //                 Computed: "no",
        //                 Length: 8,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_ELEVEN",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 80,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "no",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "no",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_TWELVE",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 80,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "yes",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_THIRTEEN",
        //                 Type: "char",
        //                 Computed: "no",
        //                 Length: 1,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "yes",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             },
        //             {
        //                 Column_name: "COLUMN_FOURTEEN",
        //                 Type: "datetime",
        //                 Computed: "no",
        //                 Length: 8,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "(n/a)",
        //                 FixedLenNullInSource: "(n/a)",
        //                 Collation: null
        //             },
        //             {
        //                 Column_name: "COLUMN_NINETEEN",
        //                 Type: "varchar",
        //                 Computed: "no",
        //                 Length: 14,
        //                 Prec: "     ",
        //                 Scale: "     ",
        //                 Nullable: "yes",
        //                 TrimTrailingBlanks: "no",
        //                 FixedLenNullInSource: "yes",
        //                 Collation: "SQL_Latin1_General_CP1_CI_AI"
        //             }
        //         ],
        //         [
        //             {
        //                 Identity: "COLUMN_SIX",
        //                 Seed: 1,
        //                 Increment: 1,
        //                 "Not For Replication": 0
        //             }
        //         ],
        //         [
        //             {
        //                 RowGuidCol: "No rowguidcol column defined."
        //             }
        //         ],
        //         [
        //             {
        //                 Data_located_on_filegroup: "PRIMARY"
        //             }
        //         ],
        //         [
        //             {
        //                 index_name: "PK_ONE",
        //                 index_description: "clustered, unique, primary key located on PRIMARY",
        //                 index_keys: "COLUMN_SIX"
        //             }
        //         ],
        //         [
        //             {
        //                 constraint_type: "DEFAULT on column HDRCODVER",
        //                 constraint_name: "DF__TABLE_ONE__HDRCO__60FDF878",
        //                 delete_action: "(n/a)",
        //                 update_action: "(n/a)",
        //                 status_enabled: "(n/a)",
        //                 status_for_replication: "(n/a)",
        //                 constraint_keys: "((0))"
        //             },
        //             {
        //                 constraint_type: "PRIMARY KEY (clustered)",
        //                 constraint_name: "PK_ONE",
        //                 delete_action: "(n/a)",
        //                 update_action: "(n/a)",
        //                 status_enabled: "(n/a)",
        //                 status_for_replication: "(n/a)",
        //                 constraint_keys: "COLUMN_SIX"
        //             }
        //         ]
        //     ],
        //     recordset: [
        //         {
        //             Name: "EFDTBLAPRAPROVACAO",
        //             Owner: "dbo",
        //             Type: "user table",
        //             Created_datetime: "2018-03-08T16:57:38.097Z"
        //         }
        //     ],
        //     output: {},
        //     rowsAffected: []
        // };

        // aCallback.call(null, null, result);
    }
}

