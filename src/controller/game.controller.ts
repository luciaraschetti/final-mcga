import {RequestHandler} from 'express'
import Game from '../model/Game';

export const createGame : RequestHandler = async (req,res) => {
    const game = new Game(req.body) 
    const savedGame = await game.save();
    res.json(savedGame);
};

export const getGames : RequestHandler = async (req,res) => {
    const games = await Game.find().populate('ratingId', 'name')
    return res.json(games);
};

export const getGameById : RequestHandler = async (req,res) => {
    const gameFound = await Game.findById(req.params.id)
    return res.json(gameFound);
};

export const deleteGameById : RequestHandler = async (req,res) => {
    const gameFound = await Game.findByIdAndDelete(req.params.id)
    return res.json(gameFound);
};

export const updateGameById : RequestHandler = async (req,res) => {
    const gameUpdated = await Game.findByIdAndUpdate(req.params.id,req.body)
    res.json(gameUpdated)
};