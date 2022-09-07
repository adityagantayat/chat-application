import { createContext } from 'react';
import { User } from '../types';

type AuthContextType = {
  user?: User;
  updateAuthUser: (data: User | undefined) => void;
};
export const AuthContext = createContext<AuthContextType>({
  updateAuthUser: (data) => {},
});
