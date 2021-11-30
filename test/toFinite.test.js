import chai from "chai"
import toFinite from "../COMP.SE.200-2021-2022-1/src/toFinite.js"
const expect = chai.expect

// These tests seek not only to test whether this function can turn infinite values
// finite but also (more importantly, even) to make sure the underlying toNumber function
// works as intended since toNumber is not separately tested.

// From toFinite.js
const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308

describe("toFinite", () => {

 // Return finite numbers as is
 it("returns small positive integer as is", () =>{
     expect(toFinite(4)).to.equal(4);
 });
 it("returns small negative integer as is", () =>{
     expect(toFinite(-9)).to.equal(-9);
 });
 it("returns zero as is", () =>{
     expect(toFinite(0)).to.equal(0);
 });

 // Return max integer for infinities
 it("returns max positive integer for positive infinity", () =>{
     expect(toFinite(INFINITY)).to.equal(MAX_INTEGER);
 });
 it("returns max negative integer for negative infinity", () =>{
     expect(toFinite(-INFINITY)).to.equal(-MAX_INTEGER);
 });

 // What booleans should be turned into was not specified,
 // but it was specified that the return value should be a number.
 it("returns a number for false", () =>{
     expect(toFinite(false)).to.be.a("number");
 });
 it("returns a number for true", () =>{
     expect(toFinite(true)).to.be.a("number");
 });

 // Parsing strings
 it("returns NaN for string that represents a number", () =>{
     expect(toFinite("123")).to.equal(123);
 });
 it("returns NaN for string that represents a number but has extra whitespace", () =>{
     expect(toFinite("   -45 ")).to.equal(-45);
 });
 it("returns zero for string that has numbers but also letters (and is not valid encoding for another base)", () =>{
     expect(toFinite("m4526np")).to.equal(0);
 });
 it("returns zero for string with letters and no numbers", () =>{
     expect(toFinite("string")).to.equal(0);
 });
 // Parsing strings of a base other than 10 is tested rather superficially as it is not
 // expected to be used a lot and testing exhaustively takes considerable effort
 it("returns correct number value for a string that represents a binary number", () =>{
     expect(toFinite("0b00100101")).to.equal(37);
 });
 it("returns correct number value for a string that represents a hexadecimal number", () =>{
     expect(toFinite("0x0000FF")).to.equal(255);
 });

 // Single-element array
 it("returns number from array with one number element", () =>{
     expect(toFinite([-160])).to.equal(-160);
 });

 // Return zero for other types
 it("returns zero for NaN", () =>{
     expect(toFinite(NaN)).to.equal(0);
 });
 it("returns zero for empty string", () =>{
     expect(toFinite("")).to.equal(0);
 });
 it("returns zero for empty array", () =>{
     expect(toFinite([])).to.equal(-0);
 });
 it("returns zero for array with more than one number", () =>{
     expect(toFinite([14, 7])).to.equal(0);
 });
 it("returns zero for object", () =>{
     expect(toFinite({"value": 3})).to.equal(0);
 });

})
