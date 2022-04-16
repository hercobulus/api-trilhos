import { Router } from 'express';
import StoresController from '../controllers/StoresControllers';

const storesRouter = Router();
const storesController = new StoresController();

storesRouter.post('/', storesController.create);

export default storesRouter;
