const expect = require('chai').expect;
const { describe, it } = require('mocha');
const { getAllStates, getAllUT } = require('./index');

describe('Indian States', () => {

  it('Should work', () => {
    expect(true).to.be.true;
  });

  it('Should have a list of all States', () => {
    expect(isArrayOfStrings(getAllStates())).to.be.true;
  });

  it('Should have a list of all UTs', () => {
    expect(isArrayOfStrings(getAllUT())).to.be.true;
  });

});

function isArrayOfStrings(array) {
  return array.every(item => {
    return typeof item === 'string';
  });
}
