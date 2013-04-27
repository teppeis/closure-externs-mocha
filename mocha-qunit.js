/**
 * @fileoverview Externs for QUnit interface of Mocha 1.9.0.
 * @externs
 */

/**
 * @param {function()} fn
 */
function before(fn) {}

/**
 * @param {function()} fn
 */
function after(fn) {}

/**
 * @param {function()} fn
 */
function beforeEach(fn) {}

/**
 * @param {function()} fn
 */
function afterEach(fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
function suite(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
suite.only = function(title, opt_fn) {};

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
function test(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
test.skip = function(title, opt_fn) {};

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
test.only = function(title, opt_fn) {};
