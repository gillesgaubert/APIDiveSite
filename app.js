const express = require('express');
const app = express();

// lets use an env variable for heroku deployment
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

const diveSiteRoutes = require('./routes/diveSiteRoutes');

app.use(express.json());
app.use('/diveSite', diveSiteRoutes);
app.use("/", (res, req) => {
    req.send("Welcome to Node API... Use /diveSite to proceed... Or not :-)")
});
app.listen(port);
