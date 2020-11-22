import app from './app';
import './database';

app.listen(/*process.env.PORT || */app.get('port'),() => {
    console.log('Server on port',app.get('port'));
})
