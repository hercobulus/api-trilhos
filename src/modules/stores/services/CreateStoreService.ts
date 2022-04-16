import { getCustomRepository } from 'typeorm';
import Store from '../typeorm/entities/Store';
import StoreRepository from '../typeorm/repositories/StoresRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateStoreService {
  public async execute({ name, description }: IRequest): Promise<Store> {
    const storeRepository = getCustomRepository(StoreRepository);

    const store = storeRepository.create({ name, description });
    storeRepository.save(store);

    return store;
  }
}

export default CreateStoreService;
