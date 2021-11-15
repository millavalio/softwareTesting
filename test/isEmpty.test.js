import chai from "chai"
import isEmpty from "../COMP.SE.200-2021-2022-1/src/isEmpty.js"
const expect = chai.expect

describe("isEmpty", () => {

 it("returns true for null", () =>{
     expect(isEmpty(null)).to.equal(true);
 });
 it("returns true for empty string", () =>{
     expect(isEmpty("")).to.equal(true);
 });
 it("returns true for empty array", () =>{
     expect(isEmpty([])).to.equal(true);
 });
 it("returns true for empty object", () =>{
     expect(isEmpty({})).to.equal(true);
 });
 it("returns true for empty map", () =>{
     expect(isEmpty(new Map())).to.equal(true);
 });
 it("returns true for empty set", () =>{
     expect(isEmpty(new Set())).to.equal(true);
 });
 it("returns true for boolean", () =>{
     expect(isEmpty(true)).to.equal(true);
 });
 it("returns true for non-zero integer", () =>{
     expect(isEmpty(15)).to.equal(true);
 });
 it("returns true for zero", () =>{
     expect(isEmpty(0)).to.equal(true);
 });

 it("returns false for non-empty string", () =>{
     expect(isEmpty("this is a non-empty string")).to.equal(false);
 });
 it("returns false for whitespace string", () =>{
     expect(isEmpty("    ")).to.equal(false);
 });
 it("returns false for non-empty array", () =>{
     expect(isEmpty(["one", "two", "three"])).to.equal(false);
 });
 it("returns false for non-empty object", () =>{
     expect(isEmpty({"one": 1})).to.equal(false);
 });
 it("returns false for non-empty map", () =>{
     const testmap = new Map();
     testmap.set(-17, "minus seventeen");
     expect(isEmpty(testmap)).to.equal(false);
 });
 it("returns false for non-empty set", () =>{
     const testmap = new Set();
     testmap.add("string element");
     expect(isEmpty(testmap)).to.equal(false);
 });

})
