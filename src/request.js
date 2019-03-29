"use strict";

const fetch = require("node-fetch");

class Request {

    constructor (options = {}) {
        this.token = options.token;
    }

    get (url) {
        return fetch(url, {
            headers: {
                "X-Typetalk-Token": this.token
            },
            method: "get"
        });
    }

    post (url, data) {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "X-Typetalk-Token": this.token
            },
            method: "post"
        });
    }

}

module.exports = Request;
