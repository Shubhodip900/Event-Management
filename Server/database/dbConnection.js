import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL, {dbName : "Event_Management"}).then( ()=>{
        console.log("MongoDB conected");
    }).catch((err) =>{
        console.log("Some Error Occurred while connecting to DB",err);
    });
}