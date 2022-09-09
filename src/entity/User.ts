import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column()
  password: string
}