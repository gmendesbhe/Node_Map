const sql = require('mssql');

const config = require('../Configuration/conf').sqlConnection;

const template = require('../FileSystem/readTemplate');
sql.TYPES

module.exports = {
    readMetadata: (callback) => {
        let result = {
            recordsets: [
                [
                    {
                        Name: "TABLE_ONE",
                        Owner: "dbo",
                        Type: "user table",
                        Created_datetime: "2018-03-08T16:57:38.097Z"
                    }
                ],
                [
                    {
                        Column_name: "COLUMN_ONE",
                        Type: "varchar",
                        Computed: "no",
                        Length: 25,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "no",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "no",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_TWO",
                        Type: "varchar",
                        Computed: "no",
                        Length: 30,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "no",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "no",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_THREE",
                        Type: "varchar",
                        Computed: "no",
                        Length: 15,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "yes",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_FOUR",
                        Type: "varchar",
                        Computed: "no",
                        Length: 20,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "no",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "no",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_FIVE",
                        Type: "numeric",
                        Computed: "no",
                        Length: 5,
                        Prec: "5    ",
                        Scale: "0    ",
                        Nullable: "no",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_SIX",
                        Type: "numeric",
                        Computed: "no",
                        Length: 9,
                        Prec: "10   ",
                        Scale: "0    ",
                        Nullable: "no",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_SEVEN",
                        Type: "numeric",
                        Computed: "no",
                        Length: 9,
                        Prec: "10   ",
                        Scale: "0    ",
                        Nullable: "no",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_EIGHT",
                        Type: "numeric",
                        Computed: "no",
                        Length: 9,
                        Prec: "10   ",
                        Scale: "0    ",
                        Nullable: "no",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_NINE",
                        Type: "varchar",
                        Computed: "no",
                        Length: 6,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "no",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "no",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_TEN",
                        Type: "datetime",
                        Computed: "no",
                        Length: 8,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_ELEVEN",
                        Type: "varchar",
                        Computed: "no",
                        Length: 80,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "no",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "no",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_TWELVE",
                        Type: "varchar",
                        Computed: "no",
                        Length: 80,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "yes",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_THIRTEEN",
                        Type: "char",
                        Computed: "no",
                        Length: 1,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "yes",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    },
                    {
                        Column_name: "COLUMN_FOURTEEN",
                        Type: "datetime",
                        Computed: "no",
                        Length: 8,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "(n/a)",
                        FixedLenNullInSource: "(n/a)",
                        Collation: null
                    },
                    {
                        Column_name: "COLUMN_NINETEEN",
                        Type: "varchar",
                        Computed: "no",
                        Length: 14,
                        Prec: "     ",
                        Scale: "     ",
                        Nullable: "yes",
                        TrimTrailingBlanks: "no",
                        FixedLenNullInSource: "yes",
                        Collation: "SQL_Latin1_General_CP1_CI_AI"
                    }
                ],
                [
                    {
                        Identity: "COLUMN_SIX",
                        Seed: 1,
                        Increment: 1,
                        "Not For Replication": 0
                    }
                ],
                [
                    {
                        RowGuidCol: "No rowguidcol column defined."
                    }
                ],
                [
                    {
                        Data_located_on_filegroup: "PRIMARY"
                    }
                ],
                [
                    {
                        index_name: "PK_ONE",
                        index_description: "clustered, unique, primary key located on PRIMARY",
                        index_keys: "COLUMN_SIX"
                    }
                ],
                [
                    {
                        constraint_type: "DEFAULT on column HDRCODVER",
                        constraint_name: "DF__TABLE_ONE__HDRCO__60FDF878",
                        delete_action: "(n/a)",
                        update_action: "(n/a)",
                        status_enabled: "(n/a)",
                        status_for_replication: "(n/a)",
                        constraint_keys: "((0))"
                    },
                    {
                        constraint_type: "PRIMARY KEY (clustered)",
                        constraint_name: "PK_ONE",
                        delete_action: "(n/a)",
                        update_action: "(n/a)",
                        status_enabled: "(n/a)",
                        status_for_replication: "(n/a)",
                        constraint_keys: "COLUMN_SIX"
                    }
                ]
            ],
            recordset: [
                {
                    Name: "EFDTBLAPRAPROVACAO",
                    Owner: "dbo",
                    Type: "user table",
                    Created_datetime: "2018-03-08T16:57:38.097Z"
                }
            ],
            output: {},
            rowsAffected: []
        };

        callback.call(null, null, result);
    }
}

