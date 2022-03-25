export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export type CreateUserDto = Omit<User, 'id'>;
