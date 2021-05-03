require('dotenv').config();

const server = require('./server');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server listening at localhost:${PORT}`));