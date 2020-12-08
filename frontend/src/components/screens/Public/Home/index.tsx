import './style.css';
import React, { useEffect, useState, Fragment } from 'react';
import NavBar from '../../../layouts/Public/Navbar/index';

export interface TournamentProps { }

export interface Tournament {
    _id: string;
    name: string;
    state: string;
    tournamentStartDate: Date;
    image: string;
    maxPlayers: number;

}


const Index: React.FC<TournamentProps> = (props) => {
    const [tournaments, setTournamentList] = useState<Tournament[]>([]);
    const getTournaments = async () => {
        // Use [] as second argument in useEffect for not rendering each time
        let t = await fetch('https://mcga-azzaretti-raschetti.herokuapp.com/tournament')
        let tournaments = await t.json();
        setTournamentList(tournaments)
    }
    useEffect(() => { getTournaments(); }, [])

    return (
        <React.Fragment>
            <NavBar />
            <div className="tournamentContainer">
                <div className="tournaments">
                    {tournaments.map(tournament => (
                        <>
                            <div className="tournament">
                                {<img src={tournament.image} alt="imagen"></img>}
                                <h1>{tournament.name}</h1>
                                <h3>Inicio: {tournament.tournamentStartDate}</h3>
                                <div className="status"><div><h3>{tournament.state}</h3></div></div>
                                <div className="enroll">
                                    <h3>Max Players: {tournament.maxPlayers}</h3>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;
