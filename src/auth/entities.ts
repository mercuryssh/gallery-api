import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn, UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Clients from '../clients/entities';

@Entity('Authentications')
export default class Authentications extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
  })
  email: string

  @Column()
  password: string

  @OneToMany(
    () => Clients,
    (client) => client.auth,
  )
  @JoinColumn()
  client: Clients

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
