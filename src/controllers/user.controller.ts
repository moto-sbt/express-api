import { Controller, Get, UseBefore } from 'routing-controllers';
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
}