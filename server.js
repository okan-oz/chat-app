const express = require('express');
const app = express();

app.use(express.static(__dirname));

const server = app.listen(3000, () => {
    const {port} = server.address();
    console.log(`Listening on port ${port}`);
});