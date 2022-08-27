import { AppDataSource } from './app-data-source';
import { User } from '../entity/User';

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
}).finally(() => {
  process.exit()
})