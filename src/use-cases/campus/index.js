const buildAddCampus = require('./add-campus');
const { campusDB } = require('../../database');

const addCampus = buildAddCampus({ campusDB });

const campusService = Object.freeze({
    addCampus
});

module.exports =
{
    campusService,
    addCampus
};