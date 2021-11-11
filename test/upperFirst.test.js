import chai from "chai"
import upperFirst from "../COMP.SE.200-2021-2022-1/src/upperFirst.js"
const expect = chai.expect

describe("upperFirst", () => {
 it("returns single uppercase letter as is", () =>{
     expect(upperFirst("A")).to.equal("A");
 });
 it("returns single lowercase letter as its uppercase counterpart", () =>{
     expect(upperFirst("a")).to.equal("A");
 });
 it("returns lowercase multi-character string with first character capitalized and rest unchanged", () =>{
     expect(upperFirst("testing lowercase")).to.equal("Testing lowercase");
 });
 it("returns already capitalized multi-character string as is", () =>{
     expect(upperFirst("Testing already capitalized")).to.equal("Testing already capitalized");
 });
 it("returns all caps multi-character string as is", () =>{
     expect(upperFirst("TESTING ALL CAPS")).to.equal("TESTING ALL CAPS");
 });
 it("returns string with non-letter first character as is", () =>{
     expect(upperFirst("!testing non-letter first character")).to.equal("!testing non-letter first character");
 });
 it("returns string starting with white space as is", () =>{
     expect(upperFirst(" testing whitespace")).to.equal(" testing whitespace");
 });
 it("returns empty string as is", () =>{
     expect(upperFirst("")).to.equal("");
 });
})
