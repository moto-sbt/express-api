import { Controller, Get, UseBefore } from 'routing-controllers';
import { AuthMiddleware } from '../middleware/auth.middleware';

@Controller('/users')
@UseBefore(AuthMiddleware)
export class UserController {
  @Get('/')
  getAll() {
    const users = [
      {
        id: 1,
        name: "User Userson",
      },
    ];
    return users;
  }
}