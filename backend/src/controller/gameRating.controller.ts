import {RequestHandler} from 'express'
import GameRating from '../model/GameRating';

export const createGameRating : RequestHandler = async (req,res) => {
    const gamesRating = new GameRating(req.body) 
    const savedGameRating = await gamesRating.save();
    res.json(savedGameRating);
};

export const getGamesRating : RequestHandler = async (req,res) => {
    const gamesRating = await GameRating.find()
    return res.json(gamesRating);
};

export const getGameRatingById : RequestHandler = async (req,res) => {
    const gameRatingFound = await GameRating.findById(req.params.id)
    return res.json(gameRatingFound);
};

export const deleteGameRatingById : RequestHandler = async (req,res) => {
    const gameRatingFound = await GameRating.findByIdAndDelete(req.params.id)
    return res.json(gameRatingFound);
};

export const updatedGameRatingByID : RequestHandler = async (req,res) => {
    const gameRatingUpdated = await GameRating.findByIdAndUpdate(req.params.id,req.body)
    res.json(gameRatingUpdated)
};

