import chai from "chai"
import upperFirst from "../COMP.SE.200-2021-2022-1/src/upperFirst.js"
const expect = chai.expect

describe("upperFirst", () => {
 it("returns all caps string as is", () =>{
     expect(upperFirst("TESTING")).to.equal("TESTING");
 });
})
