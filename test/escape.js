/* global describe, it */

import escape from '../lib/escape'
import {default as chai, expect} from 'chai'

describe('escape', function () {
  const emptyString = '\'\''

  chai.use(function (_chai, utils) {
    const Assertion = chai.Assertion

    function property (name, asserter) {
      utils.addProperty(Assertion.prototype, name, function () {
        return asserter.apply(this, arguments)
      })
    }

    function method (name, asserter) {
      utils.addMethod(Assertion.prototype, name, function () {
        return asserter.apply(this, arguments)
      })
    }

    property('identity', function () {
      utils.flag(this, 'identity', true)
    })

    method('under', function (func) {
      if (utils.flag(this, 'identity')) {
        if (typeof func !== 'function') {
          throw new TypeError('is identity of expects a function')
        }

        this.assert(this._obj === func(this._obj), `Expected ${JSON.stringify(this._obj)} to be an identity under ${func.name}`)
      }
    })
  })

  it('should return \'\' for null, undefined, and the empty string', function () {
    expect(escape(null)).to.be.equal(emptyString)
    expect(escape(undefined)).to.be.equal(emptyString)
    expect(escape('')).to.be.equal(emptyString)
  })

  it('should not escape letters', function () {
    expect('a').to.be.an.identity.under(escape)
    expect('abc').to.be.an.identity.under(escape)
  })

  it('should not escape numbers', function () {
    expect('0').to.be.an.identity.under(escape)
    expect('42').to.be.an.identity.under(escape)
  })

  it('should not escape dashes', function () {
    expect('-').to.be.an.identity.under(escape)
    expect('--').to.be.an.identity.under(escape)
  })

  it('should not escape letters in combination with dashes', function () {
    expect('a-').to.be.an.identity.under(escape)
    expect('abc-').to.be.an.identity.under(escape)

    expect('-b').to.be.an.identity.under(escape)
    expect('-bcd').to.be.an.identity.under(escape)

    expect('a-b').to.be.an.identity.under(escape)
    expect('abc-b').to.be.an.identity.under(escape)
    expect('a-bcd').to.be.an.identity.under(escape)
    expect('abc-bcd').to.be.an.identity.under(escape)

    expect('a-b-').to.be.an.identity.under(escape)
    expect('abc-b-').to.be.an.identity.under(escape)
    expect('a-bcd-').to.be.an.identity.under(escape)
    expect('abc-bcd-').to.be.an.identity.under(escape)

    expect('-a-b-').to.be.an.identity.under(escape)
    expect('-abc-b-').to.be.an.identity.under(escape)
    expect('-a-bcd-').to.be.an.identity.under(escape)
    expect('-abc-bcd-').to.be.an.identity.under(escape)
  })

  it('should not escape numbers in combination with dashes', function () {
    expect('4-').to.be.an.identity.under(escape)
    expect('42-').to.be.an.identity.under(escape)

    expect('-2').to.be.an.identity.under(escape)
    expect('-21').to.be.an.identity.under(escape)

    expect('4-b').to.be.an.identity.under(escape)
    expect('42-2').to.be.an.identity.under(escape)
    expect('4-21').to.be.an.identity.under(escape)
    expect('42-21').to.be.an.identity.under(escape)

    expect('4-2-').to.be.an.identity.under(escape)
    expect('42-2-').to.be.an.identity.under(escape)
    expect('4-21-').to.be.an.identity.under(escape)
    expect('42-21-').to.be.an.identity.under(escape)

    expect('-4-2-').to.be.an.identity.under(escape)
    expect('-42-2-').to.be.an.identity.under(escape)
    expect('-4-21-').to.be.an.identity.under(escape)
    expect('-42-21-').to.be.an.identity.under(escape)
  })

  it('should escape symbols', function () {
    expect(escape('$&()#')).to.equal('\\$\\&\\(\\)\\#')
  })
})
