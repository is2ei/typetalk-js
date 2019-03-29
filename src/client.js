const Constants = require("./constants"),
    Request = require("./request");


class Client {

    constructor (options = {}) {
        this.token = options.token;
    }

    postMessage (data, topic) {
        const request = new Request({
            token: this.token
        });

        const url = Constants.Endpoints.PostMessage(topic.id);
        return request
            .post(url, data)
            .then((res) => res.json())
            .catch((err) => err);
    }

}

module.exports = Client;
