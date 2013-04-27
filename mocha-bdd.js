/**
 * @fileoverview Externs for BDD interface of Mocha 1.9.0.
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
function describe(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
function xdescribe(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
describe.skip = function(title, opt_fn) {};

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
describe.only = function(title, opt_fn) {};

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
function it(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
function xit(title, opt_fn) {}

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
it.skip = function(title, opt_fn) {};

/**
 * @param {string} title
 * @param {function()?} opt_fn
 */
it.only = function(title, opt_fn) {};
