import {Schema,model} from 'mongoose';

const defaultRulesSchema = new Schema({
    name: String,
    value: String,
    description: String
})

export default model('defaultRule',defaultRulesSchema)