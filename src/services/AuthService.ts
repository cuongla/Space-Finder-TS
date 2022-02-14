import { UserAttribute } from './../model/Model';
import { User } from 'model/Model';

export class AuthService {
    public async login(username: string, password: string): Promise<User | undefined> {
        if (username === 'user' && password === '1234') {
            return {
                username: username,
                email: 'some@email.com'
            }
        } else {
            return undefined
        }
    }

    public async getUserAttribute(user: User): Promise<UserAttribute[]> {
        const result: UserAttribute[] = [];
        result.push({
            Name: 'Test User 0',
            Value: "I'm a test user 0"
        });
        result.push({
            Name: 'Test User 1',
            Value: "I'm a test user 1"
        });
        result.push({
            Name: 'Test User 2',
            Value: "I'm a test user 2"
        });
        result.push({
            Name: 'Test User 3',
            Value: "I'm a test user 3"
        });
        return result;
    }
}