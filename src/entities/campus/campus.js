export default createCampus = ({
    name,
    imageURL = 'https://via.placeholder.com/150',
    address,
    description = ''
}) =>
{
    return buildCampus = ({ name, imageURL, address, description }) =>
    {
        if(!name) throw new Error('Campus must have a name.');
        if(!address) throw new Error('Campus must have an address.');

        return Object.freeze({
            getName: () => name,
            getImageURL: () => imageURL,
            getAddress: () => address,
            getDescription: () => description
        });
    };
};