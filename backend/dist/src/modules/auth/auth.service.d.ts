import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository.js';
export declare class AuthService {
    private readonly authRepository;
    private readonly jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
        };
    }>;
}
