require('dotenv').config();

module.exports =
{
    development:
    {
        url: process.env.DEV_DATABASE_URL || 'postgres://dev:pass@example.com:5432/db',
        dialect: 'postgres'
    },
    test:
    {
        url: process.env.TEST_DATABASE_URL || 'postgres://test:pass@example.com:5432/db',
        dialect: 'postgres'
    },
    production:
    {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    }
};