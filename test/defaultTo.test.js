import chai from "chai"
import defaultTo from "../COMP.SE.200-2021-2022-1/src/defaultTo.js"
const expect = chai.expect

// Since null, NaN and undefined are all falsy values, truthy values will (should) never be
// treated like them. That is why the concept of truthy values is utilized in the
// definitions and descriptions of these tests. Falsy values that are not null, Nan
// or undefined are still tested as well.

describe("defaultTo", () => {
 it("truthy value and null/undefined/NaN default value gives value", () =>{
     expect(defaultTo(4, null)).to.equal(4);
     let emptylist = [];
     expect(defaultTo(emptylist, NaN)).to.equal(emptylist);
     let emptyobj = [];
     expect(defaultTo(emptyobj, undefined)).to.equal(emptyobj);
 });
 it("null/undefined/NaN value and truthy default value gives default value", () =>{
     expect(defaultTo(null, "default value")).to.equal("default value");
     expect(defaultTo(NaN, "default value")).to.equal("default value");
     expect(defaultTo(undefined, "default value")).to.equal("default value");
 });
 it("null and null/undefined/NaN default value gives default value", () =>{
     expect(defaultTo(null, null)).to.equal(null);
     expect(defaultTo(null, undefined)).to.equal(undefined);
     expect(defaultTo(null, NaN)).to.be.NaN;
 });
 it("undefined and null/undefined/NaN default value gives default value", () =>{
     expect(defaultTo(undefined, null)).to.equal(null);
     expect(defaultTo(undefined, undefined)).to.equal(undefined);
     expect(defaultTo(undefined, NaN)).to.be.NaN;
 });
 it("NaN and null/undefined/NaN default value gives default value", () =>{
     expect(defaultTo(NaN, null)).to.equal(null);
     expect(defaultTo(NaN, undefined)).to.equal(undefined);
     expect(defaultTo(NaN, NaN)).to.be.NaN;
 });
 it("falsy values that are not NaN, null or undefined with truthy default value returns value", () =>{
     expect(defaultTo(0, -15)).to.equal(0);
     expect(defaultTo(-0, true)).to.equal(-0);
     expect(defaultTo(0n, "Default value")).to.equal(0n);
     expect(defaultTo("", new Date())).to.equal("");
     expect(defaultTo(false, Infinity)).to.equal(false);
 });
})
