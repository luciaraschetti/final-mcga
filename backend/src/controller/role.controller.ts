import {RequestHandler} from 'express'
import Role from '../model/Role';

export const createRole : RequestHandler = async (req,res) => {
    const role = new Role(req.body) 
    const savedRole = await role.save();
    res.json(savedRole);
};

export const getRoles : RequestHandler = async (req,res) => {
    const roles = await Role.find().populate('ratingId')
    return res.json(roles);
};

export const getRoleById : RequestHandler = async (req,res) => {
    const roleFound = await Role.findById(req.params.id)
    return res.json(roleFound);
};

export const deleteRoleById : RequestHandler = async (req,res) => {
    const roleFound = await Role.findByIdAndDelete(req.params.id)
    return res.json(roleFound);
};

export const updateTournamentById : RequestHandler = async (req,res) => {
    const roleFound = await Role.findByIdAndUpdate(req.params.id,req.body)
    res.json(roleFound)
};