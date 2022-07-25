import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['postId', 'isRequest'])
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;
  @Column()
  userId?: number;
  @Column()
  isRequest: boolean;
  @Column()
  username: string;
  @Column({ nullable: true })
  phoneNumber?: string;
  @Column()
  date: string;
  @Column()
  userImgUrl: string;
  @Column()
  moreInfo: string;
  @Column()
  seatingAmount: number;
}
