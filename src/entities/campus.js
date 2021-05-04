export default buildCreateCampus = ({ name, imageURL, address, description }) =>
{
    return createCampus = ({ name, imageURL, address, description }) =>
    {
        if(!name) throw new Error('Campus must have a name.');
        if(!address) throw new Error('Campus must have an address.');

        return Object.freeze({
            getName: () => name,
            getImageURL: () => imageURL || 'https://via.placeholder.com/150',
            getAddress: () => address,
            getDescription: () => description || ''
        });
    };
};