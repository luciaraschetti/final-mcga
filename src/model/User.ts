import {Schema,model} from 'mongoose';

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    birthday: String,
    govIdType: String,
    govIdNumber: String,
    country: String,
    city: String,
    phoneNumber: Number,
    avatar: String,
    role: 
        [{
            ref: "Role",
            type: Schema.Types.ObjectId
        }],
    rating: Number,
    status: String
}, {
    timestamps:true,
    versionKey:false
});

export default model('User',userSchema);