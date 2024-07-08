//logic of login here

import express from 'express';
import {Admin} from '../models/Admin.js';
import { Student } from '../models/student.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', async(req,res) => {
    try{
        const {username, password, role} = req.body;

    if(role === 'admin'){
        const admin = await Admin.findOne({username})
        if(!admin) {
            return  res.json({message: "admin not registered!"});
        }

        const validPassword = await bcrypt.compare(password, admin.password)
        if(!validPassword){
            return res.json({message: "wrong password!"})
        }

        const token = jwt.sign({username: admin.username, role: 'admin'}, process.env.Admin_Key)
        //store token in cookie
        res.cookie('token', token, {httpOnly:true, secure: true})

        return res.json({login:true, role:"admin"})

    }else if(role === 'student'){
        const student = await Student.findOne({username})
        if(!student) {
            return  res.json({message: "Student not registered!"});
        }

        const validPassword = await bcrypt.compare(password, student.password)
        if(!validPassword){
            return res.json({message: "wrong password!"})
        }

        const token = jwt.sign({username: student.username, role: 'student'}, process.env.Student_Key)
        //store token in cookie
        res.cookie('token', token, {httpOnly:true, secure: true})

        return res.json({login:true, role:"student"})

    }else{

    }
    }catch(err){
        res.json({message: "Error"})
    }
})

const verifyAdmin = (req,res,next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({message:"Invalid Admin"})
    }else{
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if(err) {
                return res.json({message:"Invalid token"})
            }else{
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }
}

export { router as AdminRouter, verifyAdmin }