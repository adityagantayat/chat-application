import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { Session } from './utils/typeorm';
import { TypeormStore } from 'connect-typeorm/out';
import { getRepository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT, COOKIE_SECRET } = process.env;
  const sessionRepository = getRepository(Session);
  app.setGlobalPrefix('api');
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: COOKIE_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24, //expires after 1 day
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
