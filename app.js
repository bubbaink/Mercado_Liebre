let express = require("express");
let app = express()
let port = 3030;
let path = require("path")

app.use(express.static("public"))
app.get("/", (req,res)=>{
    return res.sendFile(path.join(__dirname,"views","home.html"))
})
app.listen(port,()=> console.log(`Server ON http://localhost:${port}`));