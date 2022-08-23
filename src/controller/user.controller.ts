import { Controller, Get, UseBefore } from 'routing-controllers';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { UserService } from '../service/userService';

const userService = new UserService();

@Controller('/users')
@UseBefore(AuthMiddleware)
export class UserController {
  @Get('/')
  async getAll() {
    const users = await userService.all()
    return users;
  }
}