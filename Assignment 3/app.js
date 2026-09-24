const express=require("express");
const logger=require("./middleware/logger");
const userRoutes=require("./routes/userRoutes");
const app=express();
const PORT=3000;

app.use(express.json());
app.use(logger);
app.use("/api", userRoutes);
app.get("/",(req,res)=>{
    res.send("user authentication api is running");

});

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}` )
})