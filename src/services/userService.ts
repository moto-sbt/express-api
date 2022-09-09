import { AppDataSource } from '../database/app-data-source';
import { User } from '../entity/User';

export class UserService {
  
  private userRepository = AppDataSource.getRepository(User)

  async all() {
    return this.userRepository.find();
  }

  async getOneByUserId(userId: string) {
    const user = this.userRepository
      .createQueryBuilder("user")
      .where("user.userId = :userId", { userId })
      .getOne();
    return user;
  }
}