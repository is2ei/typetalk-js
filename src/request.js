"use strict";

const fetch = require("node-fetch");

class Request {

    constructor (options = {}) {
        this.token = options.token;
        this.isBot = options.isBot;
    }

    get (url) {
        const headers = {},
            method = "get";
        if (this.isBot) {
            headers["X-Typetalk-Token"] = this.token;
        } else {
            headers["Authorization"] = `Bearer ${this.token}`;
        }
        return fetch(url, {
            headers,
            method
        });
    }

    post (url, data) {
        const body = JSON.stringify(data),
            headers = {"Content-Type": "application/json"},
            method = "post";
        if (this.isBot) {
            headers["X-Typetalk-Token"] = this.token;
        } else {
            headers["Authorization"] = `Bearer ${this.token}`;
        }
        return fetch(url, {
            body,
            headers,
            method
        });
    }

}

module.exports = Request;
