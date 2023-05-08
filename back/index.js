const expres = require('express');
const cors = require('cors');
require('./dbs/Config');

const User = require('./dbs/User');

const app = expres();

app.use(expres.json());
app.use(cors());

app.get("/", async(req, res) => {
    let user = await User.find().select("name email role");
    res.send(user);
});

app.listen(5000);