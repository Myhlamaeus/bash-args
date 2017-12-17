'use strict';

const assert = require('assert');

const { unescape } = require('../');

describe('unescape', function() {
  it("should parse '' as empty string", function() {
    assert.equal(unescape("''"), '');
  });
});
