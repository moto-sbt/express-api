import { faker } from '@faker-js/faker';
import { AppDataSource } from './app-data-source';
import { User } from '../entity/User';

AppDataSource.initialize()
.then(async () => {

  for (let i = 0; i < 3; i++) {
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        username: faker.internet.userName(),
        password: "password"
      })
    )
  }

  console.log("Data Source has been initialized!")
})
.catch((err) => {
  console.error("Error during Data Source initialization:", err)
}).finally(() => {
  process.exit()
})