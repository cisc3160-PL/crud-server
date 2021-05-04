const createCampus = require('../../entities/campus');

module.exports = buildAddCampus = ({ campusDB }) =>
{
    return addCampus = async (campusInfo) =>
    {
        const campus = createCampus(campusInfo);

        return campusDB.insert({
            name: campus.getName(),
            imageUrl: campus.getImageURL(),
            address: campus.getAddress(),
            description: campus.getDescription()
        })
    }
}