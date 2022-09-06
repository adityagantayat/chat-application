export type CreateUserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
};
export type ValidateUserDetails = {
  email: string;
  password: string;
};
export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;
