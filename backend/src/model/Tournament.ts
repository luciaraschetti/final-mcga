import {Schema,model} from 'mongoose';
import User from './User';

const tournamentSchema = new Schema({
    name: String,
    adminId: {
        ref: "User",
        type: Schema.Types.ObjectId
    },
    image: String,
    game:{
        ref: "Game",
        type: Schema.Types.ObjectId
    },
    state: String,
    creationDate : Date,
    publicationDate : Date,
    enrollStartDate : Date,
    enrollEndDate : Date,
    tournamentStartDate : Date,
    tournamentEndDate: Date,
    players: [{
        ref:'User',
        type: Schema.Types.ObjectId
    }],
    waitlist: String,
    maxPlayers: Number,
    rules: [{
        ref:'defaultRule',
        type: Schema.Types.ObjectId
    }]
})

export default model('Tournament',tournamentSchema);