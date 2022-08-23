import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { AppDataSource } from './app-data-source';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        username: "motosbt",
        password: "password"
      })
    )

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        username: "mtnrsbt",
        password: "password"
      })
    )
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express()

app.use(bodyParser.json());

useExpressServer(app, {
  controllers: [
    UserController,
    AuthController,
  ]
})

app.listen(3000);