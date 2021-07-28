const express =require("express")
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose");
const authRouter=require("./routes/auth")
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(console.log("connect to mongo"))
.catch(err=>console.log("error abcd"));
app.use("/api/auth", authRouter);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.listen("4000", ()=>{
    console.log("backend is running");
})