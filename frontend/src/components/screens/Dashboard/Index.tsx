import './style.css';
import React, { useState } from 'react';
import MLayout from '../../layouts/Private/index';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

class Index extends React.Component {
    state = {
        countUsers: 0,
        countTournaments: 0,
        countGames: 0
    }

    async getUsers() {
        const response = await axios.get("https://mcga-azzaretti-raschetti.herokuapp.com/user");
        try {
            this.setState({
                countUsers: response.data.length
            });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
        return this.state.countUsers;
    }

    async getTournaments() {
        const response = await axios.get("https://mcga-azzaretti-raschetti.herokuapp.com/tournament");
        try {
            this.setState({
                countTournaments: response.data.length
            });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
        return this.state.countUsers;
    }

    async getGames() {
        const response = await axios.get("https://mcga-azzaretti-raschetti.herokuapp.com/game");
        try {
            this.setState({
                countGames: response.data.length
            });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
        return this.state.countUsers;
    }

    render() {
        this.getUsers();
        this.getTournaments();
        this.getGames();
        const { countUsers } = this.state;
        const { countTournaments } = this.state;
        const { countGames } = this.state;
        return (
            <MLayout headerText='Dashboard'>
                <div className="dashboardContainer">
                    <div className="card">
                        <img src="https://www.graphicsprings.com/filestorage/stencils/dc564e692b22957680c206d57ed2f20f.png?width=500&height=500" alt="gameLogo" />
                        <h3>Total Games in the platform</h3>
                        <h1>{this.state.countGames === 0 ? <CircularProgress /> : countGames}</h1>
                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp2E4gSZlkHhfT8C0yQZoOu7F4zMHVoLR9g&usqp=CAU" alt="gameLogo" />
                        <h3>Total Tournaments</h3>
                        <h1>{this.state.countTournaments === 0 ? <CircularProgress /> : countTournaments}</h1>
                    </div>
                    <div className="card">
                        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/users5.png" alt="gameLogo" />
                        <h3>Total Users registered</h3>
                        <h1>{this.state.countUsers === 0 ? <CircularProgress /> : countUsers}</h1>
                    </div>
                </div>
            </MLayout>
        );
    }
}

export default Index;