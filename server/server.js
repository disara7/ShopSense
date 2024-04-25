const express = require("express");
const dbConnect = require("./dbConnect/doConnection");
const app = express();
const routes = require("./routes/routes.js");


app.use(express.json());

app.use("/", routes);

app.get("/", (req, res)=>{
    res.send("Backend works!")
});
app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running on ${process.env.PORT || 5000}`);
    dbConnect();
});