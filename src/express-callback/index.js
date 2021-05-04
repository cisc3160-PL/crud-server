module.exports = buildExpressCallback = (controller) =>
{
    return (req, res) =>
    {
        const httpRequest =
        {
            body: req.body,
            query: req.query,
            params: req.params,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type')
            }
        };
        controller(httpRequest)
        .then(httpResponse =>
        {
            if(httpResponse.headers) res.set(httpResponse.headers);
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        })
        .catch(e => res.status(500).send({ error: 'An unknown error has occurred.' }));
    };
};