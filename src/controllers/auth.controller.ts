import { Controller, Post, Body } from 'routing-controllers';
import { createToken } from '../lib/authorized';
import { UserService } from '../services/userService';

type LoginData = {
  userId: string
  password: string
}

@Controller()
export class AuthController {
  @Post('/login')
  async login(@Body() loginData: LoginData) {
    // ID, PW 取得
    const userId = loginData.userId;
    const password = loginData.password;

    // ユーザデータ取得
    const userService = new UserService();
    const user = await userService.getOneByUserId(userId);

    // 認証（仮）
    if (!!user && password === user.password) {
      const token = createToken(userId);
      return { token: token };
    } else {
      return { error: "auth error" };
    }
  }
}