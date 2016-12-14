"use strict";
const Chai = require("chai");
Chai.should();
const simplifying_multilinear_polynomials_1 = require("./simplifying_multilinear_polynomials");
describe("Simplifying Multilinear Polynomials", function () {
    it("Test reduction by equivalence", () => {
        /*simplify("dc+dcba").should.eq("cd+abcd");
        simplify("2xy-yx").should.eq("xy");*/
        simplifying_multilinear_polynomials_1.default("-a+5ab+3a-c-2a").should.eq("-c+5ab");
    });
    it("Test monomial length ordering", () => {
        simplifying_multilinear_polynomials_1.default("-abc+3a+2ac").should.eq("3a+2ac-abc");
        simplifying_multilinear_polynomials_1.default("xyz-xz").should.eq("-xz+xyz");
    });
    it("Test lexicographic ordering", () => {
        simplifying_multilinear_polynomials_1.default("a+ca-ab").should.eq("a-ab+ac");
        simplifying_multilinear_polynomials_1.default("xzy+zby").should.eq("byz+xyz");
    });
    it("Test no leading +", () => {
        simplifying_multilinear_polynomials_1.default("-y+x").should.eq("x-y");
        simplifying_multilinear_polynomials_1.default("y-x").should.eq("-x+y");
    });
    it("More complicated tests", () => {
        simplifying_multilinear_polynomials_1.default("-9d+5d+1d+12dy+10d+10yd+6yd+10cdy").should.eq("7d+28dy+10cdy");
    });
});
//# sourceMappingURL=simplifying_multilinear_polynomials.test.js.map