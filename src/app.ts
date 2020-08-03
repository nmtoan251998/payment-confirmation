import App from './config/express';
import Config from './shared/config/config.service';
import DatabaseConnection from './config/database';

DatabaseConnection();

App.listen(8080, (error) : void => {
    if (error) { 
        throw new Error(error);
    }

    console.log(`Server is listening on ${Config.apiUrl} (${Config.env})`);
});


