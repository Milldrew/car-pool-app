import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  userId: string;
  @IsString()
  email?: string;
  @IsString()
  firstName?: string;
  @IsString()
  lastName?: string;
  @IsString()
  photoUrl?: string;
}
