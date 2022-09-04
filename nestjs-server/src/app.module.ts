import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { Services } from './utils/types';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env.dev' }), AuthModule],
  controllers: [],
})
export class AppModule {}
