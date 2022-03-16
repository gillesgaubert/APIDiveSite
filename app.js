const express = require('express');
const app = express();
const diveSiteRoutes = require('./routes/diveSiteRoutes');

app.use(express.json());
app.use('/diveSite', diveSiteRoutes);
app.use("/", (res, req) => {
    req.send("Welcome to Node API... Use /diveSite to proceed... Or not :-)")
});
app.listen(3000);
