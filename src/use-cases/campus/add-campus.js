import createCampus from '../../entities/campus';

export default buildAddCampus = ({ campusDB }) =>
{
    return addCampus = async (campusInfo) =>
    {
        const campus = createCampus(campusInfo);
        const exists = await campusDB.findById({ id: campus.getId() });
        if(exists) return exists;

        return campusDB.insert({
            name: campus.getName(),
            imageUrl: campus.getImageURL(),
            address: campus.getAddress(),
            description: campus.getDescription()
        })
    }
}