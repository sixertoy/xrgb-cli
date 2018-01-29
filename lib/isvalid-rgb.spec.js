/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */

const { assert } = require('chai');
const isvalid = require('./../lib/isvalid-rgb');

describe('Valid Color HEX Formats', function () {
  it('should fail', function () {
    assert.equal(isvalid('rgb'), false);
    assert.equal(isvalid('rgba'), false);
    assert.equal(isvalid('rg(255,255,255)'), false);
    assert.equal(isvalid('rga(255,255,255)'), false);
    assert.equal(isvalid('rga(255,255,255)'), false);
  });
  it('should pass', function () {
    let value = isvalid('rgb(255,255,255)');
    assert.deepEqual(value, ['rgb', '255,255,255']);
    value = isvalid('rgb(12,255,255)');
    assert.deepEqual(value, ['rgb', '12,255,255']);
    value = isvalid('rgb(12,12,1)');
    assert.deepEqual(value, ['rgb', '12,12,1']);
    value = isvalid('rgb(0,2,1)');
    assert.deepEqual(value, ['rgb', '0,2,1']);
    value = isvalid('rgba(255,255,255)');
    assert.deepEqual(value, ['rgba', '255,255,255']);
    value = isvalid('rgba(255,255,255,1)');
    assert.deepEqual(value, ['rgba', '255,255,255', '1']);
    value = isvalid('rgba(255,255,255,0.2)');
    assert.deepEqual(value, ['rgba', '255,255,255', '0.2']);
    value = isvalid('rgba(255,255,255,0.25)');
    assert.deepEqual(value, ['rgba', '255,255,255', '0.25']);
    value = isvalid('rgba(255,255,255,.25)');
    assert.deepEqual(value, ['rgba', '255,255,255', '.25']);
  });
});
