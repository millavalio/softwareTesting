import chai, { AssertionError } from "chai"
import filter from "../COMP.SE.200-2021-2022-1/src/filter.js"
const expect = chai.expect

describe("filter", () => {
 it("returns right object", () =>{
    const users = [
        { 'user': 'aaa', 'active': true, 'admin': true },
        { 'user': 'bbb',   'active': false, 'admin': true },
        { 'user': 'ccc',   'active': false, 'admin': false },
        { 'user': 'ddd',   'active': true, 'admin': false }
    ]
    expect(filter(users, ({active}) => active)).to.eql([        
        { "active": true, "admin": true, "user": "aaa" },
        { "active": true, "admin": false, "user": "ddd" }
    ])
    // Returns values aplhabetically ordered
 });
 it("returns empty array when array empty", () =>{
    const users = []
    expect(filter(users, ({}) => '')).to.eql([[]])
 });
  it("returns undefined when predicate not found", () =>{
    const users = []
    expect(filter(users, ({active}) => active)).to.eql([[]])
     
 });
 it("returns right object when array has numbers", () =>{
    const users = [
        { 'user': 1, 'active': true, 'admin': true },
        { 'user': 2,   'active': false, 'admin': true },
        { 'user': 3,   'active': false, 'admin': false },
        { 'user': 4,   'active': true, 'admin': false}
    ]
    expect(filter(users, ({active}) => active)).to.eql([        
        { "active": true, "admin": true, "user": 1 },
        { "active": true, "admin": false, "user": 4 }
    ])
});

});