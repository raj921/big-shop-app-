import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Itemimage } from '../../../modules/itemimage/domain'

@Entity()
export class Groceryitem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  description?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.groceryitems)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Itemimage, child => child.item)
  itemimagesAsItem?: Itemimage[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
