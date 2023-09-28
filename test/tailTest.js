//const assert = require('chai').assert;
const expect = require('chai').expect;
const tail = require('../tail');

//Test Case: Check the original array

describe("tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.eql([2, 3]);
    //assert.strictEqual(tail([1, 2, 3]), [2, 3]);
  });
});

it("returns [] for ['5']", () => {
  expect(tail(['5'])).to.eql([]);
});

it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  expect(tail(["Yo Yo", "Lighthouse", "Labs"])).to.eql(["Lighthouse", "Labs"]);
});



 