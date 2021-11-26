import chai, { AssertionError } from "chai"
import reduce from "../COMP.SE.200-2021-2022-1/src/reduce.js"
const expect = chai.expect

describe("reduce", () => {
 it("iterates non-array", () =>{
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.eql(3)
 })
 it("iterates array", () =>{
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {})).to.eql({ '1': ['a', 'c'], '2': ['b'] } )
 })
});