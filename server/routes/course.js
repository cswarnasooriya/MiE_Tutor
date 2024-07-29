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

export {router as courseRouter}