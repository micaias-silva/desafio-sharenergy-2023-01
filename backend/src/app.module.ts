import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL as string;

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL),
    ClientsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
