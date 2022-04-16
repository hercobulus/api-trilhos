import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('decimal')
  price: number;

  @Column('varchar')
  image_small: string;

  @Column('varchar')
  image_original: string;

  @Column('int')
  quantity: number;

  @Column('uuid')
  categoryId: string;

  @Column('uuid')
  storeId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
