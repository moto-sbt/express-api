import { Controller, Get, UseBefore, Param, NotFoundError } from 'routing-controllers';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { UserService } from '../services/userService';

@Controller('/users')
@UseBefore(AuthMiddleware)
export class UserController {
  @Get('/')
  async getAll() {
    const userService = new UserService();
    const users = await userService.all()
    return users;
  }

  @Get('/:userId')
  async getOneByUsername(@Param("userId") userId: string) {
    const userService = new UserService();
    const user = await userService.getOneByUserId(userId);
    if (!user) {
      throw new NotFoundError('User was not found');
    }
    return user;
  }
}