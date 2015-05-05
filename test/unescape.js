/* global describe, it */

import unescape from '../lib/unescape'
import {expect} from 'chai'

describe('unescape', function () {
  it('should parse \'\' as empty string', function () {
    expect(unescape('\'\'')).to.equal('')
  })
})
