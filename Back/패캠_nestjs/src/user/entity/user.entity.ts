import { RefreshToken } from 'src/auth/entity/refresh-token.entity';
import { Role } from 'src/auth/enum/user.enum';
import { Video } from 'src/video/entity/video.entity';
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({type : 'enum', enum : Role, nullable : true})
  role : Role = Role.User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Video, (video) => video.user)
  videos: Video[];

  @OneToOne( () => RefreshToken, (RefreshToken) => RefreshToken.user)
  refreshToken : RefreshToken;
}
