import { AppDataSource } from '../database/app-data-source';
import { User } from '../entity/User';

export class UserService {
  
  private userRepository = AppDataSource.getRepository(User)

  async all() {
    return this.userRepository.find();
  }
}