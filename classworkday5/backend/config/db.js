const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/RailwayDB");
        console.log("MongoDB Connected");

    }catch(error){
        console.log("Connection Failed" + error.message);

    }
};
module.exports={connectDB};
