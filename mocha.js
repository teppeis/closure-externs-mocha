/**
 * @fileoverview Externs for Mocha 1.9.0.
 * @externs
 */

/**
 * @type {Mocha}
 */
var mocha;

/**
 * @param {Object} options
 * @constructor
 */
function Mocha(options) {}

/**
 * @param {boolean} [bail]
 * @return {Mocha}
 */
Mocha.prototype.bail = function(bail) {};

/**
 * @param {string} file
 * @return {Mocha}
 */
Mocha.prototype.addFile = function(file) {};

/**
 * @param {string|Function} reporter name or constructor
 * @return {Mocha}
 */
Mocha.prototype.reporter = function(reporter) {};

/**
 * @param {string} name
 * @return {Mocha}
 */
Mocha.prototype.ui = function(name) {};

/**
 * no return value.
 */
Mocha.prototype.loadFiles = function(fn) {};

/**
 * @param {RegExp|string} re
 * @return {Mocha}
 */
Mocha.prototype.grep = function(re) {};

/**
 * @return {Mocha}
 */
Mocha.prototype.invert = function() {};

/**
 * @return {Mocha}
 */
Mocha.prototype.ignoreLeaks = function() {};

/**
 * @return {Mocha}
 */
Mocha.prototype.checkLeaks = function() {};

/**
 * @return {Mocha}
 */
Mocha.prototype.growl = function() {};

/**
 * @param {Array|string} globals
 * @return {Mocha}
 */
Mocha.prototype.globals = function(globals) {};

/**
 * @param {number} timeout
 * @return {Mocha}
 */
Mocha.prototype.timeout = function(timeout) {};

/**
 * @param {number} slow
 * @return {Mocha}
 */
Mocha.prototype.slow = function(slow) {};

/**
 * @return {Mocha}
 */
Mocha.prototype.asyncOnly = function() {};

/**
 * @param {Function} fn
 * @return {Runner}
 */
Mocha.prototype.run = function(fn) {};

/**
 * @param {Suite} suite
 * @constructor
 */
function Runner(suite) {}

/**
 * @param {RegExp} re
 * @param {Boolean} invert
 * @return {Runner} for chaining
 */
Runner.prototype.grep = function(re, invert) {};

/**
 * @param {Suite} suite
 * @return {number}
 */
Runner.prototype.grepTotal = function(suite) {};

/**
 * @param {Array} arr
 * @return {Runner} for chaining
 */
Runner.prototype.globals = function(arr) {};

/**
 * @param {Function} fn
 * @return {Runner} for chaining
 */
Runner.prototype.run = function(fn) {};

/**
 * @param {string} title
 * @param {Context} ctx
 * @constructor
 */
function Suite(title, ctx) {}

/**
 * @return {string}
 */
Suite.prototype.fullTitle = function() {};

/**
 * @return {number}
 */
Suite.prototype.total = function() {};

/**
 * Private constructor.
 * Defined for the type annotation.
 * @constructor
 */
function Context() {}
