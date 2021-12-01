import chai, { AssertionError } from "chai"
import reduce from "../COMP.SE.200-2021-2022-1/src/reduce.js"
const expect = chai.expect

describe("reduce", () => {

 // Testing with addition
 it("sum: iterates array with accumulator zero", () =>{
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).to.eql(6)
 })
 it("sum: iterates array with non-zero accumulator", () =>{
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 2)).to.eql(8)
 })
 it("sum: iterates array with negative numbers", () =>{
    expect(reduce([-1, 2, -3], (sum, n) => sum + n, 0)).to.eql(-2)
 })
 it("sum: iterates array with non-integer values", () =>{
    expect(reduce([1, 2, 3.5], (sum, n) => sum + n, 0)).to.eql(6.5)
 })
 it("sum: iterates array with zero", () =>{
    expect(reduce([0, 0], (sum, n) => sum + n, 0)).to.eql(0)
 })
 it("sum: iterates array with infinite", () =>{
    expect(reduce([1, 2, Infinity], (sum, n) => sum + n, 0)).to.eql(Infinity)
 })

 // Testing with grouping
 it("grouping: iterates with empty accumulator", () =>{
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {})).to.eql({ '1': ['a', 'c'], '2': ['b'] } )
 })
 it("grouping: iterates with non-empty accumulator", () =>{
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {3: ['d']})).to.eql({ '1': ['a', 'c'], '2': ['b'], 3: ['d'] } )
 })
 it("grouping: iterates with letters as value", () =>{
    expect(reduce({ 'a': 1, 'b': 2, 'c': 'd' }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {})).to.eql({ '1': ['a'], '2': ['b'], 'd': ['c']} )
 })
 it("grouping: iterates with numbers as key", () =>{
    expect(reduce({ 'a': 1, 'b': 2, 4: 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {})).to.eql({ '1': ['4', 'a'], '2': ['b'] } )
 })

 // Testing with substraction
 it("iterates array with substracting function", () =>{
    expect(reduce([1, 2, 3], (sub, n) => sub - n, 10)).to.eql(4)
 })

 // Testing with multiplication
 it("iterates array with multiplying function", () =>{
    expect(reduce([1, 2, 3], (product, n) => product * n, 2)).to.eql(12)
 })

});