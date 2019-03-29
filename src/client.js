const Constants = require("./constants"),
    Request = require("./request");


class Client {

    constructor (options = {}) {
        this.token = options.token;
    }

    getMessages (data, topic) {

    }

    postMessage (data, topic) {
        const request = new Request({
            token: this.token
        });

        const url = Constants.Endpoints.PostMessage(topic.id);
        request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

}

module.exports = Client;
