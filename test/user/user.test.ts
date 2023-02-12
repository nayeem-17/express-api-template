import { MockContext, Context, createMockContext } from '../context';
import { createUser, updateUsername } from './func';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('should create new user ', async () => {
  const user = {
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
    password: '',
  };
  mockCtx.prisma.user.create.mockResolvedValue(user);

  await expect(createUser(user, ctx)).resolves.toEqual({
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
    acceptTermsAndConditions: true,
  });
});

test('should update a users name ', async () => {
  const user = {
    id: 1,
    name: 'Rich Haines',
    email: 'hello@prisma.io',
    password: '',
  };
  mockCtx.prisma.user.update.mockResolvedValue(user);

  await expect(updateUsername(user, ctx)).resolves.toEqual({
    id: 1,
    name: 'Rich Haines',
    email: 'hello@prisma.io',
  });
});

test('should fail if user does not accept terms', async () => {
  const user = {
    id: 1,
    name: 'Rich Haines',
    email: 'hello@prisma.io',
    password: '',
  };

  mockCtx.prisma.user.create.mockRejectedValue(
    new Error('User must accept terms!'),
  );

  await expect(createUser(user, ctx)).resolves.toEqual(
    new Error('User must accept terms!'),
  );
});
