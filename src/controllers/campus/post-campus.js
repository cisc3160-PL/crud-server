module.exports = buildPostCampus = ({ addCampus }) =>
{
    return postCampus = async (httpRequest) =>
    {
        try
        {
            const { ...campusInfo } = httpRequest.body;
            const newCampus = await addCampus({ ...campusInfo });

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: { newCampus }
            }
        }
        catch(err)
        {
            console.error(err);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: err.message
                }
            }
        }
    }
};