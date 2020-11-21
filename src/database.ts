import mongoose,{ConnectionOptions} from 'mongoose';

(async ()=> {
    try {
        const mongooseOptions : ConnectionOptions = {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true
        }
        const db = await mongoose.connect("mongodb+srv://esports-platform:uai2020@cluster0.qcutj.mongodb.net/test?retryWrites=true&w=majority",mongooseOptions);
        console.log('Database Mongoodb is Connected to: ',db.connection.name);
    }
    catch (error) {
        console.error(error)
    }
})()

    