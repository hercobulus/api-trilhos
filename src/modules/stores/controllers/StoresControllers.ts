import { Request, Response } from 'express';
import CreateStoreService from '../services/CreateStoreService';

export default class StoresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createStore = new CreateStoreService();

    const store = await createStore.execute({ name, description });

    return response.status(201).json(store);
  }
}
