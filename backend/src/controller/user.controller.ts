import {RequestHandler} from 'express'
import User from '../model/User';

export const createUser : RequestHandler = async (req,res) => {
    const user = new User(req.body) 
    const savedUser = await user.save();
    res.json(savedUser);
};

export const getUsers : RequestHandler = async (req,res) => {
    const users = await User.find().populate('role')
    return res.json(users);
};

export const getUserbyId : RequestHandler = async (req,res) => {
    const userFound = await User.findById(req.params.id)
    return res.json(userFound);
};

export const deleteUserById : RequestHandler = async (req,res) => {
    const userFound = await User.findByIdAndDelete(req.params.id)
    return res.json(userFound);
};

export const updateUserById : RequestHandler = async (req,res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.id,req.body)
    res.json(userUpdated)
};

