import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = async () =>{
    try{
        mongoose.connect(process.env.URL)
        console.log("Connected to Database..!")
    }catch(err){
        console.log("Error: " + err)
    }
}

export {connection};