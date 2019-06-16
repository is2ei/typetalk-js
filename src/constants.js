"use strict";

const hostName = "typetalk.com";

exports.Endpoints = {
    // https://developer.nulab.com/docs/typetalk/auth/
    getAccessToken: () => `https://${hostName}/oauth2/access_token`,

    // https://developer.nulab.com/docs/typetalk/api/1/post-message/
    postMessage: (topicID) => `https://${hostName}/api/v1/topics/${topicID}`,

    // https://developer.nulab.com/docs/typetalk/api/1/create-topic/
    createTopic: () => `https://${hostName}/api/v1/topics`
};
