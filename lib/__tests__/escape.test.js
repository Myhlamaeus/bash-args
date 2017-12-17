'use strict';

const assert = require('assert');

const { escape } = require('../');

function assertIdentity(value, func, ...otherArgs) {
  assert.equal(value, func(value), ...otherArgs);
}

describe('escape', function() {
  const emptyString = "''";

  it("should return '' for null, undefined, and the empty string", function() {
    assert.equal(escape(null), emptyString);
    assert.equal(escape(undefined), emptyString);
    assert.equal(escape(''), emptyString);
  });

  it('should not escape letters', function() {
    assertIdentity('a', escape);
    assertIdentity('abc', escape);
  });

  it('should not escape numbers', function() {
    assertIdentity('0', escape);
    assertIdentity('42', escape);
  });

  it('should not escape dashes', function() {
    assertIdentity('-', escape);
    assertIdentity('--', escape);
  });

  it('should not escape letters in combination with dashes', function() {
    assertIdentity('a-', escape);
    assertIdentity('abc-', escape);

    assertIdentity('-b', escape);
    assertIdentity('-bcd', escape);

    assertIdentity('a-b', escape);
    assertIdentity('abc-b', escape);
    assertIdentity('a-bcd', escape);
    assertIdentity('abc-bcd', escape);

    assertIdentity('a-b-', escape);
    assertIdentity('abc-b-', escape);
    assertIdentity('a-bcd-', escape);
    assertIdentity('abc-bcd-', escape);

    assertIdentity('-a-b-', escape);
    assertIdentity('-abc-b-', escape);
    assertIdentity('-a-bcd-', escape);
    assertIdentity('-abc-bcd-', escape);
  });

  it('should not escape numbers in combination with dashes', function() {
    assertIdentity('4-', escape);
    assertIdentity('42-', escape);

    assertIdentity('-2', escape);
    assertIdentity('-21', escape);

    assertIdentity('4-b', escape);
    assertIdentity('42-2', escape);
    assertIdentity('4-21', escape);
    assertIdentity('42-21', escape);

    assertIdentity('4-2-', escape);
    assertIdentity('42-2-', escape);
    assertIdentity('4-21-', escape);
    assertIdentity('42-21-', escape);

    assertIdentity('-4-2-', escape);
    assertIdentity('-42-2-', escape);
    assertIdentity('-4-21-', escape);
    assertIdentity('-42-21-', escape);
  });

  it('should escape symbols', function() {
    assert.equal(escape('$&()#'), '\\$\\&\\(\\)\\#');
  });
});
