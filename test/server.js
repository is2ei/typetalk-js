"use strict";

const http = require("http"),
    {parse} = require("url");

function router (req, res) {
    switch (parse(req.url).pathname) {
    case "/":
        switch (req.method) {
        case "GET":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("Hello, World!");
            break;
        case "POST":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("Hello, World!");
            break;
        default:
            break;
        }
        break;
    default:
        break;
    }
}

class TestServer {

    constructor () {
        this.server = http.createServer(router);
        this.port = 30001;
        this.hostname = "localhost";

        /**
         * Node 8 default keepalive timeout is 5000ms
         * make it shorter here as we want to
         * close server quickly at the end of tests
         */
        this.server.keepAliveTimeout = 1000;
        this.server.on("error", (err) => {
            /* eslint-disable-next-line no-console */
            console.log(err.stack);
        });
        this.server.on("connection", (socket) => {
            /* eslint-disable-next-line no-magic-numbers */
            socket.setTimeout(1500);
        });
    }

    start (cb) {
        this.server.listen(this.port, this.hostname, cb);
    }

    stop (cb) {
        this.server.close(cb);
    }

}

module.exports = TestServer;
