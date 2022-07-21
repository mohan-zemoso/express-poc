const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const homePageRoutes = require("./routes/homepage");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.router);
app.use(homePageRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

const server = http.createServer(app);

server.listen(3000);
