const main = require('mdl-watching-box');

const {
    GIST_ID: gistId,
    GH_TOKEN: githubToken,
    USER: user
} = process.env;

main(gistId, githubToken, user);