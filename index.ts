import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({
        DB: process.env.DATABASE_URL,
        PORT: process.env.PORT
    });
});

app.listen(process.env.PORT,()=>{
    `Server is listening on PORT: ${process.env.PORT}`
});