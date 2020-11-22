import {RequestHandler} from 'express'
import Tournament from '../model/Tournament';

var populateQuery = [{path:'User', select:'name'}, {path:'Game', select:'name'}];


export const createTournament : RequestHandler = async (req,res) => {
    const tournament = new Tournament(req.body) 
    const savedTournament = await tournament.save();
    res.json(savedTournament);
};

export const getTournaments : RequestHandler = async (req,res) => {
    const tournament = await Tournament.find().populate('adminId game players rules');
    return res.json(tournament);
};

export const getTournamentById : RequestHandler = async (req,res) => {
    const tournamentFound = await Tournament.findById(req.params.id)
    return res.json(tournamentFound);
};

export const deleteTournamentById : RequestHandler = async (req,res) => {
    const tournamentFound = await Tournament.findByIdAndDelete(req.params.id)
    return res.json(tournamentFound);
};

export const updateTournamentById : RequestHandler = async (req,res) => {
    const tournamentUpdated = await Tournament.findByIdAndUpdate(req.params.id,req.body)
    res.json(tournamentUpdated)
};