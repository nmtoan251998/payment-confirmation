import { Router } from 'express';

import userRouter from '../User/user.route';

const router = Router();

router.use('/api/v1/users', userRouter);

export default router;