import { expect } from 'chai';
import { describe, it } from 'mocha';
import { getAllStates, getAllUT } from './index';

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
