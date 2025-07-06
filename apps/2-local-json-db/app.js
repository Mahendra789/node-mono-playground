const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs"); // Set the view engine to EJS
app.set("views", "views"); // Set the views directory

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies (form submissions)
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404); // Handle 404 errors

app.listen(3002);
