/** Patterns you want to replace on the template,
 * being "pattern" : "replace with"
 * @type {Object.<string,string|function>}
 */
const patternDic = {
    _namespace_: 'testNamespace',
    __className__: 'testClass'
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
    VarChar: 'string',
    NVarChar: 'string',
    Text: 'string',
    Int: 'int',
    BigInt: 'int',
    TinyInt: 'int',
    SmallInt: 'int',
    Bit: '',
    Float: 'float',
    Numeric: '',
    Decimal: 'decimal',
    Real: '',
    Date: 'DateTime',
    DateTime: 'DateTime',
    DateTime2: 'DateTime',
    DateTimeOffset: '',
    SmallDateTime: '',
    Time: 'DateTime',
    UniqueIdentifier: '',
    SmallMoney: '',
    Money: '',
    Binary: '',
    VarBinary: '',
    Image: '',
    Xml: '',
    Char: 'string',
    NChar: 'string',
    NText: 'string',
    TVP: '',
    UDT: '',
    Geography: '',
    Geometry: '',
    Variant: ''
}






module.exports.PatternDictionary = patternDic;
module.exports.TypesDictionary = typesDic;
module.exports.NullablePattern = nullablePattern;