// First test - borrowed from EX1
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
var chai = require("chai")
var add = require ("../../COMP.SE.200-2021-2022-1/src/add.js")
const expect = chai.expect


describe("Sum", () => {
 it("adds positive number to positive number", () =>{
     expect(add(3, 6)).to.equal(9)
 });
})