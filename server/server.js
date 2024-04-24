const express = require("express");
const dbConnect = require("./dbConnect/doConnection");
const app = express();

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running on ${process.env.PORT || 5000}`);
    dbConnect();
});