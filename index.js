import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const __dirname = fileURLToPath(new URL('.', import.meta.url)); // Create __dirname equivalent
const app = express();
dotenv.config();

const port = process.env.PORT || 3000; 
const url = process.env.MURL;
let result;

mongoose.connect(`${url}/secretsDB`);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));


const secretSchema = new mongoose.Schema({
    usernname: String,
    title: String,
    value1: String,
    value2: String
});

const Secret = mongoose.model("Secret",secretSchema);

app.get("/",(req,res)=>{
    res.render("index.ejs",{});
});

app.post("/addDetails",(req,res)=>{
    const content = {
        username: "anurag",
        title: req.body.sTitle,
        value1: req.body.value1,
        value2: req.body.value2
    }
    const secret = new Secret(content);
    secret.save();
    console.log(content);
    res.redirect("/");
});

app.get('/viewSecrets',async (req,res)=>{
    try{
        result = await Secret.find();
        console.log(result);
    }catch(err){
        console.log(err);
    }
    res.render("viewSecrets.ejs",{
        data : result
    });
});

app.get("/viewSecrets/:id",async (req,res)=>{
    try{
        result = await Secret.findById(req.params.id);
        console.log(result);
    }catch(err){
        console.log(err);
    }
    res.render("secretDetails.ejs",{
        data : result
    })
});

app.post("/delete/:id", async (req, res) => {
    try {
        await Secret.deleteOne({ _id: req.params.id });
        res.redirect("/viewSecrets");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/edit/:id",async(req,res)=>{
    result = await Secret.findById(req.params.id);
    res.render("editSecret.ejs",{
        data:result
    });
});

app.post("/edit/:id",async (req,res)=>{
    try{
        const updated = await Secret.updateOne({_id : req.params.id},{
            name: req.body.stitle,
            value1: req.body.value1,
            value2: req.body.value2
        });
        if (updated.acknowledged) {
            res.redirect(`/viewSecrets/${req.params.id}`);
        }else {
            res.status(400).send("Update operation was not acknowledged.");
        }
    }catch(error){
        console.log(error);

    }
})
app.listen(port,()=>{
    console.log("Listening to port : " + port);
});