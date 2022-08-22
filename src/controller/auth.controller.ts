import { Controller, Post, Body } from 'routing-controllers';
import { createToken } from '../lib/authorized';

type LoginData = {
  username: string
  password: string
}

@Controller()
export class AuthController {
  @Post('/login')
  login(@Body() loginData: LoginData) {
    // ID, PW 取得
    const username = loginData.username;
    const password = loginData.password;

    // 認証（仮）
    if (username === "xxxx" && password === "xxxx") {
      const token = createToken(username);
      return { token: token };
    } else {
      return { error: "auth error" };
    }
  }
}