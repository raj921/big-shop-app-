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

import { Groceryitem } from '../../../modules/groceryitem/domain'

@Entity()
export class Itemimage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  imageUrl: string

  @Column({})
  itemId: string

  @ManyToOne(() => Groceryitem, parent => parent.itemimagesAsItem)
  @JoinColumn({ name: 'itemId' })
  item?: Groceryitem

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
