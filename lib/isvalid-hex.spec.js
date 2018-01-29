/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */

const { assert } = require('chai');
const isvalid = require('./../lib/isvalid-hex');

describe('Valid Color HEX Formats', function () {
  it('should fail', function () {
    assert.equal(isvalid(''), false);
    assert.equal(isvalid('1'), false);
    assert.equal(isvalid('#FF'), false);
    assert.equal(isvalid('#F1'), false);
    assert.equal(isvalid('#F1F1'), false);
    assert.equal(isvalid('123456'), false);
    assert.equal(isvalid('1234567'), false);
    assert.equal(isvalid('#FFGFFF'), false);
    assert.equal(isvalid('#FFFFFFF'), false);
  });
  it('should pass', function () {
    assert.equal(isvalid('#FFF'), true);
    assert.equal(isvalid('#123'), true);
    assert.equal(isvalid('#FFFFFF'), true);
    assert.equal(isvalid('#ACE539'), true);
  });
});
