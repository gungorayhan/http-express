const express = require("express")

const app2 = express();

app2.use(express.json())

app2.get("/app2",async (req,res)=>{

    res.send("http serverda app uygulamasında app2 uygulaması ile yanıt dönüyoruz")
})


module.exports = app2;