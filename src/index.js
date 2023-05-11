const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require("./routes/routes.js")

app.use(express.json())


mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://SagarMaan:yHJBlRWQ0FdJmdj6@chaudhary-shaab-db.cueddss.mongodb.net/project-2", {
    useNewUrlParser: true
}).then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server is running on port ${process.env.port||3000}`)
})