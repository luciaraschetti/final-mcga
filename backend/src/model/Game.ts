import {Schema,model} from 'mongoose';

const gameSchema = new Schema({
    name: String,
    genre: String,
    ratingId : {
        type: Schema.Types.ObjectId,
        ref: "GameRating"
      },
    image: String,
    description: String
})

export default model('Game',gameSchema)