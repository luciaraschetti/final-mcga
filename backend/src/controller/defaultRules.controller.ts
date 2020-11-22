import {RequestHandler} from 'express'
import DefaultRule from '../model/DefaultRule';

export const createDefaultRule : RequestHandler = async (req,res) => {
    const dRule = new DefaultRule(req.body) 
    const sevedDRule = await dRule.save();
    res.json(sevedDRule);
};

export const getDefaultRules : RequestHandler = async (req,res) => {
    const dRules = await DefaultRule.find()
    return res.json(dRules);
};

export const getDefaultRuleById : RequestHandler = async (req,res) => {
    const dRuleFound = await DefaultRule.findById(req.params.id)
    return res.json(dRuleFound);
};

export const deleteDefaultRule : RequestHandler = async (req,res) => {
    const dRuleFound = await DefaultRule.findByIdAndDelete(req.params.id)
    return res.json(dRuleFound);
};

export const updateDefaultRuleById : RequestHandler = async (req,res) => {
    const dRuleUpdated = await DefaultRule.findByIdAndUpdate(req.params.id,req.body)
    res.json(dRuleUpdated)
};