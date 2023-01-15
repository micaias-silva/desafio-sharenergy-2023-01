import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/shared/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOneByUsername(username);
    if (user && (await compare(pass, user.password))) {
      const { _id, username, roles } = user;
      return { id: _id, username, roles };
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
