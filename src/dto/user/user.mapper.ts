import { User } from '../../model/user';
import { UserDto } from './user.dto';

export class UserMapper {
  static toUserDto(user: User): UserDto {
    const userDto: UserDto = {
      name: user.name,
      email: user.email,
    };
    return userDto;
  }
  static toUser(userDto: UserDto): User {
    const user: User = {
      name: userDto.name,
      email: userDto.email,
      password: '',
    };
    return user;
  }
}
