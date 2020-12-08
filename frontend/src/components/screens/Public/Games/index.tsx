import './style.css';
import React, { useEffect, useState, Fragment } from 'react';
import NavBar from '../../../layouts/Public/Navbar/index';
import axios, { AxiosResponse } from 'axios';

export interface GameProps { }

export interface Game {
    _id: string;
    name: string;
    genre: string;
    ratingId: string;
    image: string;
    description: string;

}

const Index: React.FC<GameProps> = (props) => {
    const [games, setGameList] = useState<Game[]>([]);
    const getGames = async () => {
        // Use [] as second argument in useEffect for not rendering each time
        let g = await fetch('https://mcga-azzaretti-raschetti.herokuapp.com/game')
        let games = await g.json();
        setGameList(games)
    }
    useEffect(() => { getGames(); }, [])


    return (
        <React.Fragment>
            <div className="gameContainer">
                <NavBar />
                <div className="games">
                    {games.map(game => (
                        <>
                            <div className="game">
                                {<img src={game.image} alt="imagen"></img>}
                                <h1>{game.name}</h1>
                                <h3>Genre:  {game.genre}</h3>
                                <h3>Description: {game.description}</h3>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </React.Fragment >
    );
}

export default Index;
