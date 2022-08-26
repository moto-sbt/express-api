import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { AppDataSource } from './app-data-source';

AppDataSource.initialize()

const app = express()

app.use(bodyParser.json());

useExpressServer(app, {
  controllers: [
    UserController,
    AuthController,
  ]
})

app.listen(3000);