import chai, { AssertionError } from "chai"
import add from "../COMP.SE.200-2021-2022-1/src/add.js"
const expect = chai.expect


describe("add", () => {
 it("adds positive number to positive number", () =>{
    expect(add(2, 5)).to.equal(7)
 });
 it("adds negative number to negative number", () =>{
    expect(add(-2, -5)).to.equal(-7)
 });
 it("adds positive number to negative number", () =>{
    expect(add(2, -5)).to.equal(-3)
 });
 it("adds negative number to positive number", () =>{
    expect(add(-2, 5)).to.equal(3)
 });
 it("adds positive number to zero", () =>{
    expect(add(2, 0)).to.equal(2)
 });
 it("adds negative number to zero", () =>{
    expect(add(-2, 0)).to.equal(-2)
 });
 it("adds zero to zero", () =>{
    expect(add(0, 0)).to.equal(0)
 });
 it("adds integer to non-integer", () =>{
    expect(add(2, 5.5)).to.equal(7.5)
 });
 it("adds non-integer to integer", () =>{
    expect(add(2.5, 5)).to.equal(7.5)
 });
 it("adds non-integer to non-integer", () =>{
    expect(add(2.5, 5.5)).to.equal(8)
 });
 it("adds infinite number to infinite number", () =>{
    expect(add(Infinity, Infinity)).to.equal(Infinity)
 });
 it("adds long int to int", () =>{
   expect(() => add(1738141852226360, 1)).to.equal(1738141852226361)
 });
})
