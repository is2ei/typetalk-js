"use strict";

const Constants = require("./constants"),
    Request = require("./request");


function getAndSetAccessToken (client) {
    return client.getAccessToken({
        client_id: client.clientId,
        client_secret: client.clientSecret,
        scope: client.scope
    })
    .then((res) => {
        client.token = res.access_token;
        client.tokenType = res.token_type;
        client.expires_in = res.expires_in;
        client.refresh_token = res.refresh_token;
    })
    .catch((err) => err);
}

class Client {

    constructor (options = {}) {
        this.token = options.token;
        this.isBot = this.token? true : false;
        if (!this.isBot) {
            this.clientId = options.clientId;
            this.clientSecret = options.clientSecret;
            this.scope = options.scope? options.scope : "my";
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

        if (!this.isBot && !this.token) {
            return getAndSetAccessToken(this)
                .then(() => {
                    request.token = this.token;
                    return request
                        .post(url, data)
                        .then((res) => res.json())
                        .catch((err) => err);
                })
                .catch((err) => err);
        }
        return request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

}

module.exports = Client;
