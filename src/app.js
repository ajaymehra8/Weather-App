import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import hbs from "hbs";

const app=express();
const __filename = fileURLToPath(import.meta.url);
const ddirname = path.dirname(__filename);
const pathName=path.join(ddirname,"../public");
const template_path=path.join(ddirname,"../templates/views");
const partial_path=path.join(ddirname,"../templates/partials");

const PORT=process.env.PORT||7000;

//public static path
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(pathName));


//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404err",{
        errorMsg:"Oops page not found"
    });
})

app.listen(PORT,()=>{
    console.log("listening at port 7000");
})