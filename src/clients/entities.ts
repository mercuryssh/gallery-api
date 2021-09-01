import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Authentications from '../auth/entities';

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
  username: string

  @ManyToOne(
    () => Authentications,
    (auth) => auth.client,
  )
  @JoinColumn({
    name: 'auth_id',
  })
  auth: Authentications

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
