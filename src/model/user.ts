import { IsString, MinLength, MaxLength, IsInt } from 'class-validator';

export class User {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  email!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  password!: string;

  @IsInt()
  id?: number;
}
