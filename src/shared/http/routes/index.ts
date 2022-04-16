import storesRouter from '../../../modules/stores/routes/stores.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/stores', storesRouter);

export default routes;
