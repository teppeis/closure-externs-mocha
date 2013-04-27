/**
 * @fileoverview Externs for TDD interface of Mocha 1.9.0.
 * @externs
 */

/**
 * @param {function()} fn
 */
function setup(fn) {}

/**
 * @param {function()} fn
 */
function teardown(fn) {}

/**
 * @param {function()} fn
 */
function suiteSetup(fn) {}

/**
 * @param {function()} fn
 */
function suiteTeardown(fn) {}

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
