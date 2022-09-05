import { IUserService } from './user';
import { CreateUserDetails } from '../utils/types';
import { User } from '../utils/typeorm';
import { Repository } from 'typeorm';
export declare class UserService implements IUserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userDetails: CreateUserDetails): Promise<User>;
}
