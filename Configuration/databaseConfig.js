/**
 * @typedef Pool
 * @type {object}
 * @property {number} max The maximum number of connections there can be in the pool (default: 10).
 * @property {number} min The minimum of connections there can be in the pool (default: 0).
 * @property {number} idleTimeoutMillis The Number of milliseconds before closing an unused connection (default: 30000).
 */
/**
 * @typedef Config
 * @type {object}
 * @property {string} user User name to use for authentication.
 * @property {string} password Password to use for authentication.
 * @property {string} server Server to connect to. You can use 'localhost\instance' to connect to named instance.
 * @property {number} port Port to connect to (default: 1433). Don't set when connecting to named instance.
 * @property {string} domain Once you set domain, driver will connect to SQL Server using domain login.
 * @property {string} database Database to connect to (default: dependent on server configuration).
 * @property {number} connectionTimeout Connection timeout in ms (default: 15000).
 * @property {number} requestTimeout Request timeout in ms (default: 15000). NOTE: msnodesqlv8 driver doesn't support timeouts < 1 second.
 * @property {boolean} stream Stream recordsets/rows instead of returning them all at once as an argument of callback (default: false). You can also enable streaming for each request independently (request.stream = true). Always set to true if you plan to work with large amount of rows.
 * @property {boolean} parseJSON Parse JSON recordsets to JS objects (default: false). For more information please see section JSON support.
 * @property {Pool} pool
 */


module.exports = {
	/** 
	 * Database connection configuration
	 * @type {Config}
	 */
	config: {
		user: '...',
		password: '...',
		server: 'localhost',
		database: '...'
	},
	/** 
	 * Tables to read.
	 * Can be one table (e.g. 'XPTO'), a collection of tables (e.g. ['XPTO', 'XYZ']) or a sql pattern (e.g. '%XYZ%')
	 * @type {string|Array<string>}
	 */
	tables:''
}
// user - User name to use for authentication.
// password - Password to use for authentication.
// server - Server to connect to. You can use 'localhost\instance' to connect to named instance.
// port - Port to connect to (default: 1433). Don't set when connecting to named instance.
// domain - Once you set domain, driver will connect to SQL Server using domain login.
// database - Database to connect to (default: dependent on server configuration).
// connectionTimeout - Connection timeout in ms (default: 15000).
// requestTimeout - Request timeout in ms (default: 15000). NOTE: msnodesqlv8 driver doesn't support timeouts < 1 second.
// stream - Stream recordsets/rows instead of returning them all at once as an argument of callback (default: false). You can also enable streaming for each request independently (request.stream = true). Always set to true if you plan to work with large amount of rows.
// parseJSON - Parse JSON recordsets to JS objects (default: false). For more information please see section JSON support.
// pool.max - The maximum number of connections there can be in the pool (default: 10).
// pool.min - The minimum of connections there can be in the pool (default: 0).
// pool.idleTimeoutMillis - The Number of milliseconds before closing an unused connection (default: 30000).
