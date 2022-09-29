import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { AppDataSource } from './database/app-data-source';

AppDataSource.initialize()

const app = express()

app.use(bodyParser.json());

// CORSを許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

useExpressServer(app, {
  controllers: [
    UserController,
    AuthController,
  ]
})

app.listen(3001);