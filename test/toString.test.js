import chai from "chai"
import toString from "../COMP.SE.200-2021-2022-1/src/toString.js"
const expect = chai.expect

describe("toString", () => {

 // Null, NaN, undefined
 it("returns \"null\" for null", () =>{
     expect(toString(null)).to.equal("null");
 });
 it("returns \"NaN\" for NaN", () =>{
     expect(toString(NaN)).to.equal("NaN");
 });
 it("returns \"undefined\" for undefined", () =>{
     expect(toString(undefined)).to.equal("undefined");
 });

 // TODO rest

})
