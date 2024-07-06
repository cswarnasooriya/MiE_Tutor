//logic of student register here

import express from 'express';
import { Student } from '../models/student.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/register', async(req, res) => {
    try{
        const {username, password, faculty, index } = req.body;
        const student = await Student.findOne({username})

        if(student) {
            return res.json({message: "student is Registered!"})
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            username,
            password:hashPassword,
            index:index,
            faculty
        })

        await newStudent.save()
        return res.json({registered: true});

    }catch(err){
        return res.json({message:  "Error in registering student!"})
    }

})

export {router as studentRouter}