module.exports = buildCampusDB = ({ createDB }) =>
{
    return Object.freeze({
        findById,
        insert
    });

    async function findById({ id: _id })
    {
        
    };

    async function insert({ ...info })
    {
        return { ...info };
    };
};