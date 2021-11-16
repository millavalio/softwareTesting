import chai from "chai"
import slice from "../COMP.SE.200-2021-2022-1/src/slice.js"
const expect = chai.expect

describe("slice", () => {
 it("returns empty array for empty array", () => {
     const emptyarr = [];
     expect(slice(emptyarr, 0, 5)).to.deep.equal([]);
 });
 it("returns copy of array when no arguments are given", () => {
     const arr = [8, 3, 6];
     expect(slice(arr)).to.deep.equal(arr);
 });
 it("returns copy of array when start=0 and end is not given", () => {
     const arr = [-17, 0, -5, 8];
     expect(slice(arr, 0)).to.deep.equal(arr);
 });
 it("returns copy of array when start=0 and end is the length of the array", () => {
     const arr = ["do", "re", "mi"];
     expect(slice(arr, 0, arr.length)).to.deep.equal(arr);
 });
 it("returns array with all but the last element when start=0 and end is the length of the array minus one", () => {
     const arr = ["a", "b", "c", "d"];
     expect(slice(arr, 0, arr.length-1)).to.deep.equal(["a", "b", "c"]);
 });
 it("returns array with all but the first element when start=1 and end is the length of the array", () => {
     const arr = [77, -465, 12, 7, -96];
     expect(slice(arr, 1, arr.length)).to.deep.equal([-465, 12, 7, -96]);
 });
 it("returns array with all but the first element and last elements when start=1 and end is the length of the array minus one", () => {
     const arr = ["running", "out", "of", "ideas"];
     expect(slice(arr, 1, arr.length-1)).to.deep.equal(["out", "of"]);
 });
 it("returns slice with elements 3 to 5", () => {
     const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
     expect(slice(arr, 3, 6)).to.deep.equal(["green", "blue", "indigo"]);
 });
 it("returns empty array when start and end are the same", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, 5, 5)).to.deep.equal([]);
 });
 it("returns empty array when start is bigger than end and both are positive", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, 5, 3)).to.deep.equal([]);
 });
 // TODO: test negative indices
 // TODO: test dense arrays
})
