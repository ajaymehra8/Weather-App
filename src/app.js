const express=require("express");
const path=require("path");
const hbs=require("hbs");


const app=express();

const staticPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");


const PORT=process.env.PORT||7000;

//public static path
app.set("view engine","hbs");

app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


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