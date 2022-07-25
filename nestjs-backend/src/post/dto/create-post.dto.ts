import { IsBoolean, IsNumber, IsString } from 'class-validator';
export class CreatePostDto {
  @IsNumber()
  userId?: number;
  @IsBoolean()
  isRequest: boolean;
  @IsString()
  username: string;
  @IsString()
  phoneNumber?: string;
  @IsString()
  date: string;
  @IsString()
  userImgUrl: string;
  @IsString()
  moreInfo: string;
  @IsNumber()
  seatingAmount: number;
}
