const expres = require('express');
const cors = require('cors');

const app = expres();

app.use(expres.json());
app.use(cors());

app.get("/", async(req, res) => {
    res.send("Hello World");
});

app.listen(5000);