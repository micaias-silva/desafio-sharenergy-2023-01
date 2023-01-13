import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Role } from './role.enum';

@Injectable()
export class UserAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user, ...req } = context.switchToHttp().getRequest();

    return user.roles.includes(Role.Admin) || user.id === req.params.id;
  }
}
