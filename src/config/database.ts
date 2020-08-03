import mongoose from 'mongoose';

import Config from '../shared/config/config.service';

export default () : void => {
    const opts = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };

    mongoose.connect(Config.dbUrl, opts, (error : any) => {
        if (error) {
            throw new Error(error);
        }

        console.log(`Database connection established at ${Config.dbUrl}`);
    });
}