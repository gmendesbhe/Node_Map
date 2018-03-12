/** Patterns you want to replace on the template,
 * being "pattern" : "replace with"
 * @type {Object.<string,string|function>}
 */
const patternDic = {
    _namespace_: 'testNamespace'
}

/** Pattern to how to represent nullable values"
 * @type {string}
 */
const nullablePattern = '__type__?';


/** Patterns you want to replace on the template,
 * being "sql type" : "language type"; If "language type" can be null
 * write "?" (question mark) at the end of it
 * @type {Object.<string,string>}
 */
const typesDic = {
    bigint: 'int',
    binary: '',
    bit: 'int',
    char: 'string',
    date: 'DateTime',
    datetime: 'DateTime',
    datetime2: 'DateTime',
    datetimeoffset: 'DateTime',
    decimal: 'decimal?',
    float: '',
    image: '',
    int: 'int',
    money: '',
    nchar: 'string',
    ntext: 'string',
    numeric: 'long',
    nvarchar: 'string',
    real: '',
    smalldatetime: 'DateTime',
    smallint: 'int',
    smallmoney: '',
    text: 'string',
    time: 'DateTime',
    tinyint: '',
    varbinary: '',
    varchar: 'string'
}






module.exports.PatternDictionary = patternDic;
module.exports.TypesDictionary = typesDic;
module.exports.NullablePattern = nullablePattern;
module.exports.ExcludeFromClass = /\w+_THREE/;