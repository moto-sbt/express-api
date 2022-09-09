import { faker } from '@faker-js/faker';
import { AppDataSource } from './app-data-source';
import { User } from '../entity/User';

AppDataSource.initialize()
.then(async () => {

  await AppDataSource.manager.save(
    AppDataSource.manager.create(User, {
      userId: "motosbt",
      password: "password"
    })
  )

  for (let i = 0; i < 3; i++) {
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        userId: faker.internet.userName(),
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