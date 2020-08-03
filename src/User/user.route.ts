import { Router } from 'express';

import Config from '../shared/config/config.service';

import {
    createUser,
    getCollection,
    dropCollection,
} from './user.controller';

const router = Router();

if (Config.isDev) {
    router.route('/collection').get(getCollection);
    router.route('/collection').delete(dropCollection);
}


router.route('/').post(createUser);

export default router;
