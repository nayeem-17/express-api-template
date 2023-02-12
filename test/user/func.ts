import { User } from '../../src/model/user';
import { Context } from '../context';

export async function createUser(user: User, ctx: Context) {
  return await ctx.prisma.user.create({
    data: user,
  });
}

export async function updateUsername(user: User, ctx: Context) {
  return await ctx.prisma.user.update({
    where: { id: user.id },
    data: user,
  });
}
