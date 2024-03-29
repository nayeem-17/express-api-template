import { PrismaClient } from '@prisma/client';
import { User } from '../model/user';

export class UserRepository {
  private prisma;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  async getUser(id: number) {
    return this.prisma.user
      .findFirst({
        where: {
          id: id,
        },
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error('error occurred' + error);
      });
  }
  async createUser(user: User) {
    return this.prisma.user
      .create({
        data: user,
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log('error occurred repo ' + error.message);
        throw new Error('error occurred while creating the user');
      });
  }
  async updateUser(user: User) {
    return this.prisma.user
      .update({
        where: { id: user.id },
        data: user,
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error('error occurred' + error);
      });
  }
  async deleteUser(id: number) {
    return this.prisma.user
      .delete({
        where: { id: id },
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error('error occurred' + error);
      });
  }
}
