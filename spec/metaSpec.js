

describe('metaTest', () => {
    let rewire = require('rewire');
    let expected = 'select * from table';
    let app;

    beforeEach(() => {
        app = rewire('../DatabaseAccess/meta.js');
    });

    it('should not be a where clause', () => {
        let result = app.__get__('getWhereClause')('select * from table', '');
        expect(result).toBe(expected);
    });

    it('should have a `in` Where', () => {
        let result = app.__get__('getWhereClause')('select * from table', ['test1', 'test2']);
        expect(result).toBe(expected.concat(' WHERE TABLE_NAME IN (\'test1\',\'test2\')'));
    });

    it('should have a `like` Where', () => {
        let result = app.__get__('getWhereClause')('select * from table', '%test1');
        expect(result).toBe(expected.concat(' WHERE TABLE_NAME LIKE \'%test1\''));
    });

    it('should have a `=` Where', () => {
        let result = app.__get__('getWhereClause')('select * from table', 'test1');
        expect(result).toBe(expected.concat(' WHERE TABLE_NAME = \'test1\''));
    });

    it('should throw if not string or string[]', () => {
        expect(() => { 
            app.__get__('getWhereClause')('select * from table', 1) 
        }).toThrow();
    });
});