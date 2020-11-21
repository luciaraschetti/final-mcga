import {Schema,model} from 'mongoose';

const gameRatingSchema = new Schema({
    name: String,
    imagen: String,
    description: String
})

export default model('GameRating',gameRatingSchema);