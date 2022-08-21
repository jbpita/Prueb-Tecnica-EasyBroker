import { Router } from "express";

const router: Router = Router();

import { indexController } from "../controllers";
import { api } from '../keys';

router.get('/' , indexController.index);
router.get('/api', indexController.properties);

export default router;