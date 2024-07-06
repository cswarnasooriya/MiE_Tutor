import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    index:{
        type:String,
        
    },

    username:{
        type:String,
        required:true,
        unique:true
    },

    faculty:{
        type:String,
        
    },

    password:{
        type:String,
        required:true
    }
})

const studentModel = mongoose.model("Student", studentSchema);
export {studentModel as Student};