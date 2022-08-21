import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';


const app = express()

app.use(bodyParser.json());

useExpressServer(app, {
  controllers: [
    UserController,
    AuthController,
  ]
})

app.listen(3000);