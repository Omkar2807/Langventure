import { auth } from '@clerk/nextjs/server';

const adminIds = [
  //"user_2jvnweZ0MsvTcqCVJQkiMWxI9fN",
  'user_2tyKgFmB6sHWzmq9sD7KtQGsZ0n',
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
