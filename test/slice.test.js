import chai from "chai"
import slice from "../COMP.SE.200-2021-2022-1/src/slice.js"
const expect = chai.expect

// Function to check if an array is dense
function isDense(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      return false;
    }
  }
  return true;
}

describe("slice", () => {

 // Empty array
 it("returns empty array for empty array", () => {
     const emptyarr = [];
     expect(slice(emptyarr, 0, 5)).to.deep.equal([]);
 });

 // Test default arguments
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

 // Limit values for arguments
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

 // Sensible range, positive indices
 it("returns slice with elements 3 to 5 when given arguments 3 and 6", () => {
     const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
     expect(slice(arr, 3, 6)).to.deep.equal(["green", "blue", "indigo"]);
 });

 // Nonsensical ranges, positive indices
 it("returns empty array when start and end are the same (positive)", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, 5, 5)).to.deep.equal([]);
 });
 it("returns empty array when start is bigger than end and both are positive", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, 5, 3)).to.deep.equal([]);
 });

 // Sensible range, negative indices
 it("returns slice with elements 3 to 5 when given arguments -4 and -1", () => {
     const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
     expect(slice(arr, -4, -1)).to.deep.equal(["green", "blue", "indigo"]);
 });

 // Nonsensical ranges, negative indices
 it("returns empty array when start and end are the same (negative)", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, -5, -5)).to.deep.equal([]);
 });
 it("returns empty array when start is smaller than end and both are negative", () => {
     const arr = [1, 2, 3, 4, 5, 6, 7, 8];
     expect(slice(arr, -2, -4)).to.deep.equal([]);
 });

 // Sensible ranges, mixed-sign indices
 it("returns slice with elements 3 to 5 when given arguments -4 and 6", () => {
     const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
     expect(slice(arr, -4, 6)).to.deep.equal(["green", "blue", "indigo"]);
 });
 it("returns slice with elements 3 to 5 when given arguments 3 and -1", () => {
     const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
     expect(slice(arr, 3, -1)).to.deep.equal(["green", "blue", "indigo"]);
 });

 // Handling of sparse arrays
 // The function definition specifies the function should always give dense arrays.
 // What the dense arrays should be like was however not defined, so it is not tested.
 it("returns dense array when asked to give slice from empty region of sparse array", () => {
     const sparsearr = ["first"];
     sparsearr[5] = "sixth";
     expect(isDense( sparsearr )).to.be.false;  // Checking that isDense recognizes sparse array
     expect(isDense( slice(sparsearr, 2, 4) )).to.be.true;
 });
 it("returns dense array when asked to give slice from region of sparse array containing both real and missing elements", () => {
     const sparsearr = ["first", "second"];
     sparsearr[3] = "fourth";
     sparsearr[8] = "ninth";
     sparsearr[9] = "tenth";
     expect(isDense( sparsearr )).to.be.false;  // Checking that isDense recognizes sparse array
     expect(isDense( slice(sparsearr, 2, 9) )).to.be.true;
 });
 it("returns dense array when asked to give slice from fully populated region of sparse array", () => {
     const sparsearr = ["first", "second", "third", "fourth"];
     sparsearr[9] = "tenth";
     expect(isDense( sparsearr )).to.be.false;  // Checking that isDense recognizes sparse array
     expect(isDense( slice(sparsearr, 0, 4) )).to.be.true;
 });

})
