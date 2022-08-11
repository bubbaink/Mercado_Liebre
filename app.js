let express = require("express");
let app = express()
let port = 3030;
let path = require("path")

app.use(express.static("public"))

app.get("/", (req,res)=>{
    return res.sendFile(path.resolve(__dirname,"views","home.html"))
})
app.get("/register", (req,res)=>{
    return res.sendFile(path.resolve(__dirname,"views","register.html"))
})
app.get("/login", (req,res)=>{
    return res.sendFile(path.resolve(__dirname,"views","login.html"))
})
app.listen(port,()=> console.log(`Server ON http://localhost:${port}`));