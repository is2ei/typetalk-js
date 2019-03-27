const hostName = "typetalk.com";

exports.Endpoints = {
    // https://developer.nulab.com/docs/typetalk/api/1/post-message/
    PostMessage: (topicID) => `${hostName}/api/v1/topics/${topicID}`
};
