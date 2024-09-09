const express = require('express');
const app = express();
const path= require('path');
const fs = require('fs'); 

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine" , 'ejs');

app.get('/' , (req , res)=>{
    fs.readdir(`./files`,function(err , files){
        // console.log(files);
        res.render("index" , {files : files})

    })
    // res.send("Hello exp");
    // res.render("index.ejs")
});

app.post('/create' , (req , res)=>{
    
    // console.log(req.body);

    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`,req.body.details , function(err){
        res.redirect("/");
    });

});

app.listen(4000 , ()=>{
    console.log("This post is  running on port 4000");
})

