import chai from "chai"
import toString from "../COMP.SE.200-2021-2022-1/src/toString.js"
const expect = chai.expect

describe("toString", () => {

 // Null, NaN, undefined
 it("returns empty string for null", () =>{
     expect(toString(null)).to.equal("");
 });
 it("returns \"NaN\" for NaN", () =>{
     expect(toString(NaN)).to.equal("NaN");
 });
 it("returns empty string for undefined", () =>{
     expect(toString(undefined)).to.equal("");
 });

 // Returns strings as is
 it("returns empty string as is", () =>{
     expect(toString("")).to.equal("");
 });
 it("returns simple string as is", () =>{
     expect(toString("this is a string")).to.equal("this is a string");
 });
 it("returns more complicated string as is", () =>{
     const longstring = "Hello world! 4 - 9 = -5. 2^3 = 8. Shouting! Questioning? The quick brown fox jumps over the lazy dog. \n\n\n !#%&|åäöüñ"
     expect(toString(longstring)).to.equal(longstring);
 });

 // Numbers
 it("returns positive number as string", () =>{
     expect(toString(1.89)).to.equal("1.89");
 });
 it("returns negative number as string", () =>{
     expect(toString(-54)).to.equal("-54");
 });
 it("returns number 0 as string", () =>{
     expect(toString(0)).to.equal("0");
 });
 it("returns number -0 as string, preserves sign", () =>{
     expect(toString(-0)).to.equal("-0");
 });
 it("returns infinity as string", () =>{
     expect(toString(Infinity)).to.equal("Infinity");
 });
 it("returns negative infinity as string", () =>{
     expect(toString(-Infinity)).to.equal("-Infinity");
 });

 // Booleans
 it("returns true as string", () =>{
     expect(toString(true)).to.equal("true");
 });
 it("returns false as string", () =>{
     expect(toString(false)).to.equal("false");
 });

 // Arrays
 it("returns empty array as empty string", () =>{
     expect(toString([])).to.equal("");
 });
 it("returns array of elements as a comma separated sequence of those elements converted to string form (same type elements)", () =>{
     expect(toString([1, 2, 3])).to.equal("1,2,3");
 });
 it("returns array of elements as a comma separated sequence of those elements converted to string form (different type elements)", () =>{
     expect(toString([1, "str", null, false])).to.equal("1,str,,false");
 });
 it("returns array of elements as a comma separated sequence of those elements converted to string form (nested arrays)", () =>{
     expect(toString([1, [2, [3, 4], 5], 6])).to.equal("1,2,3,4,5,6");
 });

 // Objects
 it("acts identical to .toString for an empty object", () =>{
     expect(toString({})).to.equal({}.toString());
 });
 it("acts identical to .toString for a simple non-empty object", () =>{
     const obj = {"a": 8, "b": -9};
     expect(toString(obj)).to.equal(obj.toString());
 });
 it("acts identical to .toString for a object with nested objects", () =>{
     const obj = {"a": {"a1": 7, "a2": 0}, "b": {"b1": "none", "b2": -32}, "c": "none"};
     expect(toString(obj)).to.equal(obj.toString());
 });

})
