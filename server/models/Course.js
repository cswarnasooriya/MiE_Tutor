import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },

    instructor:{
        type:String,
        required:true,
        
    },

    imageUrl:{
        type:String,
        required:true,
    
    },


})

const courseModel = mongoose.model("Course", courseSchema);
export {courseModel as Course};