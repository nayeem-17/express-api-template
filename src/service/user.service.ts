import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../model/user';
import { UserRepository } from '../repository/user.repository';

export class UserService {
  private repository: UserRepository;
  constructor() {
    this.repository = new UserRepository();
  }
  public async getUser(id: number) {
    return this.repository.getUser(id);
  }
  async createUser(user: User) {
    user.password = AuthenticationService.makeHash(user.password);
    return this.repository.createUser(user);
  }
  async updateUser(user: User) {
    return this.repository.updateUser(user);
  }
  async deleteUser(id: number) {
    return this.repository.deleteUser(id);
  }
}
