import * as Chai from "chai";
Chai.should();

import simplify from "./simplifying_multilinear_polynomials";

describe("Simplifying Multilinear Polynomials", function () {
    it("Test reduction by equivalence", () => {
        /*simplify("dc+dcba").should.eq("cd+abcd");
        simplify("2xy-yx").should.eq("xy");*/
        simplify("-a+5ab+3a-c-2a").should.eq("-c+5ab");
    });
    it("Test monomial length ordering", () => {
        simplify("-abc+3a+2ac").should.eq("3a+2ac-abc");
        simplify("xyz-xz").should.eq("-xz+xyz");
    });
    it("Test lexicographic ordering", () => {
        simplify("a+ca-ab").should.eq("a-ab+ac");
        simplify("xzy+zby").should.eq("byz+xyz");
    });
    it("Test no leading +", () => {
        simplify("-y+x").should.eq("x-y");
        simplify("y-x").should.eq("-x+y");
    });
    
    it("More complicated tests", () => {
        simplify("-9d+5d+1d+12dy+10d+10yd+6yd+10cdy").should.eq("7d+28dy+10cdy");
    });
});