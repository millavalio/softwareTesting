import chai, { AssertionError } from "chai"
import at from "../COMP.SE.200-2021-2022-1/src/at.js"
const expect = chai.expect

describe("at", () => {
 it("returns right object", () =>{
    const object = { 'a': [{ 'b': { 'c': 3,'d': 5, 'e': 6} }, 4], 'f': 7 }
    expect(at(object, ['a[0].b.e', 'a[1]', 'f'])).to.eql([6, 4, 7])
 });
 it("returns undefined when wrong path", () =>{
    const object = { 'a': [{ 'b': { 'c': 3,'d': 5, 'e': 6} }, 4], 'f': 7 }
    expect(at(object, ['a[3]'])).to.eql([undefined])
 });
 it("returns undefined when object empty", () =>{
   const object = { }
   expect(at(object, ['a[]'])).to.eql([undefined])
 });
 it("returns empty array when path empty", () =>{
   const object = { 'a': [{ 'b': { 'c': 3,'d': 5, 'e': 6} }, 4], 'f': 7 }
   expect(at(object, [])).to.eql([])
 });
 it("returns empty array when object and path empty", () =>{
   const object = { }
   expect(at(object, [])).to.eql([])
 });
 it("returns empty array when object not an array", () =>{
   const object = 1
   expect(at(object, [])).to.eql([])
 });
});