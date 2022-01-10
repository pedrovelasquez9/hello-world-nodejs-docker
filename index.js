const express = require("express");

//Service data
const PORT = 8000;
const HOST = "0.0.0.0";

//App initialization
const app = express();
app.get('/', (req, res) => {
    console.log("Has llamado al endpoint!");
    res.send("Hola mundo con API Node =)");
})

app.listen(PORT, HOST);

console.log(`App iniciada en http://${HOST}:${PORT}`);