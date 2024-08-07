//logic of add courses here...

import express from 'express';
import { Course } from '../models/Course.js';
import dotenv from 'dotenv';
dotenv.config();
import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/add', verifyAdmin, async(req, res) => {
    try{
        const {name, instructor, imageUrl } = req.body;
        const newCourse = new Course({
            name,
            instructor,
            imageUrl
        })

        await newCourse.save()
        return res.json({added: true});

    }catch(err){
        return res.json({message:  "Error in registering course!"})
    }

    

})

router.get('/courses', async (req,res) => {
    try{
        const courses = await Course.find()
        return res.json(courses)

    }catch(err){
        return res.json(err)
    }
})

router.get('/course/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const course = await Course.findById({_id: id})
        // return res.json({updated: true, course})
        return res.json(course)
        
    }catch(err){s
        return res.json(err);
    }
   
})

//update data routing path

router.put('/course/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const course = await Course.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, course})
       
        
    }catch(err){
        return res.json(err);
    }
   
})

//delete courses

router.delete('/course/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const course = await Course.findByIdAndDelete({_id: id})
        return res.json({deleted: true, course})
       
        
    }catch(err){
        return res.json(err);
    }
})

export {router as courseRouter} 