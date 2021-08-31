import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Users entity
@Entity('Client')
export default class Clients extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column()
  usename: string

  @Column({
    unique: true,
  })
  email: string

  @Column()
  password: string
}
