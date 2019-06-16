"use strict";

const Constants = require("./constants"),
    Request = require("./request");


class Client {

    constructor (options = {}) {
        this.token = options.token;
        this.isBot = this.token? true : false;
        if (!this.isBot) {
            const res = this.getAccessToken({
                client_id: options.clientId,
                client_secret: options.clientSecret,
                grant_type: "client_credentials",
                scope: options.scope? options.scope: "my"
            })
            .then((res) => res.json())
            .catch((err) => err);
            this.token = res.access_token;
            this.tokenType = res.token_type;
            this.expires_in = res.expires_in;
            this.refresh_token = res.refresh_token;
        }
    }

    getAccessToken (data) {
        const request = new Request({
                token: this.token,
                isBot: this.isBot
            }),
            url = Constants.Endpoints.getAccessToken();

        return request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

    postMessage (data, topic) {
        const request = new Request({
                token: this.token,
                isBot: this.isBot
            }),
            url = Constants.Endpoints.postMessage(topic.id);

        return request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

    createTopic (data) {
        const request = new Request({
            token: this.token,
            isBot: this.isBot
        }),
        url = Constants.Endpoints.createTopic();

        return request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

}

module.exports = Client;
