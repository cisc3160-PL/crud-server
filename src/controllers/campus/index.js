const { addCampus } = require('../../use-cases/campus');
const buildPostCampus = require('./post-campus');

const postCampus = buildPostCampus({ addCampus });

const campusController = Object.freeze({
    postCampus
});

module.exports =
{
    campusController,
    postCampus
};