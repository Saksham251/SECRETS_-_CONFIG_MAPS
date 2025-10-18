require("dotenv").config({
    file:"./secret/.env"
});

import express from "express";

const app = express();
console.log("Running");

app.get("/",(req,res)=>{
    res.json({
        DB: process.env.DATABASE_URL,
        PORT: process.env.PORT
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT: ${process.env.PORT}`);
});