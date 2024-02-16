const express = require("express")
const app2 = require("./expressApp2");
const app = express();

app.use(express.json())

app.get("/",async (req,res)=>{

    res.send("http server içerisinden app uygulamasına gelen get isteğinde yanıt dönüyoruz")
})

app.get("/app2",app2)


module.exports = app;