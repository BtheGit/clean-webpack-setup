import { expect, assert } from 'chai'
import { doubleNum, sortAscending } from './index.js'

describe('function doubleNum', () => {
  it('Should return a number', () => {
    expect(doubleNum(2)).to.equal(4)
  })

  it('Should return null if passed a string', () => {
    expect(doubleNum('2')).to.equal(null)
  })
}) 

describe('function sortAscending', () => {
  it('Should return an array', () => {
    assert.typeOf(sortAscending([1,2,3,4]), 'array')
  })
  it('Should be sorted in ascending order', () => {
    assert.deepEqual(sortAscending([1,2,3,4]), [1,2,3,4])
    assert.deepEqual(sortAscending([2,1,3,4]), [1,2,3,4])
    assert.deepEqual(sortAscending([4,3,2,1]), [1,2,3,4])
  })
  it('Should return null if called with no arguments', () => {
    assert.equal(sortAscending(), null)
  })
})