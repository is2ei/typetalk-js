"use strict";

/* eslint-env es6, node, mocha */
const chai = require("chai");
const {expect} = chai;

const Request = require("../src/request"),
    TestServer = require("./server");

const local = new TestServer();

before((done) => {
    local.start(done);
});

after((done) => {
    local.stop(done);
});

describe("Request", () => {
    const base = `http://${local.hostname}:${local.port}/`;

    describe("get", () => {
        it("should return a promise", (done) => {
            const r = new Request({
                token: "qweasdzxc"
            });
            expect(r).to.be.instanceOf(Request);
            const p = r.get(base);
            expect(p).to.be.an.instanceof(Promise);
            expect(p).to.have.property("then");
            done();
        });
    });

    describe("post", () => {
        it("should return a promise", (done) => {
            const r = new Request({
                token: "qweasdzxc"
            });
            expect(r).to.be.instanceOf(Request);
            const p = r.post(base, {});
            expect(p).to.be.an.instanceof(Promise);
            expect(p).to.have.property("then");
            done();
        });
    });
});
