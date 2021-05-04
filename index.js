require('dotenv').config();

const server = require('./src');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server listening at localhost:${PORT}`));