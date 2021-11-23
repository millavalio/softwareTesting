import chai from "chai"
import defaultTo from "../COMP.SE.200-2021-2022-1/src/defaultTo.js"
const expect = chai.expect

// Since null, NaN and undefined are all falsy values, truthy values will (should) never be
// treated like them. That is why the concept of truthy values is utilized in the
// definitions and descriptions of these tests. Falsy values that are not null, Nan
// or undefined are still tested as well.

describe("defaultTo", () => {

 // Truthy values with null/NaN/undefined default value
 it("truthy value (positive number) and null default value gives value", () =>{
     expect(defaultTo(4, null)).to.equal(4);
 });
 it("truthy value (empty list) NaN default value gives value", () =>{
     let emptylist = [];
     expect(defaultTo(emptylist, NaN)).to.equal(emptylist);
 });
 it("truthy value (empty object) undefined default value gives value", () =>{
     let emptyobj = {};
     expect(defaultTo(emptyobj, undefined)).to.equal(emptyobj);
 });

 // Null/NaN/undefined values with truthy default value
 it("null value and truthy default value (string) gives default value", () =>{
     expect(defaultTo(null, "default value")).to.equal("default value");
 });
 it("NaN value and truthy default value (string) gives default value", () =>{
     expect(defaultTo(NaN, "default value")).to.equal("default value");
 });
 it("undefined value and truthy default value (string) gives default value", () =>{
     expect(defaultTo(undefined, "default value")).to.equal("default value");
 });

 // Null value with Null/NaN/undefined default value
 it("null value and null default value gives default value", () =>{
     expect(defaultTo(null, null)).to.equal(null);
 });
 it("null value and undefined default value gives default value", () =>{
     expect(defaultTo(null, undefined)).to.equal(undefined);
 });
 it("null value and NaN default value gives default value", () =>{
     expect(defaultTo(null, NaN)).to.be.NaN;
 });

 // Undefined with Null/NaN/undefined default value
 it("undefined value and null default value gives default value", () =>{
     expect(defaultTo(undefined, null)).to.equal(null);
 });
 it("undefined value and undefined default value gives default value", () =>{
     expect(defaultTo(undefined, undefined)).to.equal(undefined);
 });
 it("undefined value and NaN default value gives default value", () =>{
     expect(defaultTo(undefined, NaN)).to.be.NaN;
 });

 // NaN value with Null/NaN/undefined default value
 it("NaN value and null default value gives default value", () =>{
     expect(defaultTo(NaN, null)).to.equal(null);
 });
 it("NaN value and undefined default value gives default value", () =>{
     expect(defaultTo(NaN, undefined)).to.equal(undefined);
 });
 it("NaN value and nNaN default value gives default value", () =>{
     expect(defaultTo(NaN, NaN)).to.be.NaN;
 });

 // Falsy but non-NaN/null/undefined values with truthy default values
 it("falsy but non-NaN/null/undefined value (zero) with truthy default value (negative number) returns value", () =>{
     expect(defaultTo(0, -15)).to.equal(0);
 });
 it("falsy but non-NaN/null/undefined value (negative zero) with truthy default value (true) returns value", () =>{
     expect(defaultTo(-0, true)).to.equal(-0);
 });
 it("falsy but non-NaN/null/undefined value (BigInt zero) with truthy default value (string) returns value", () =>{
     expect(defaultTo(0n, "Default value")).to.equal(0n);
 });
 it("falsy but non-NaN/null/undefined value (empty string) with truthy default value (Date) returns value", () =>{
     expect(defaultTo("", new Date())).to.equal("");
 });
 it("falsy but non-NaN/null/undefined value (false) with truthy default value (Infinity) returns value", () =>{
     expect(defaultTo(false, Infinity)).to.equal(false);
 });

})
