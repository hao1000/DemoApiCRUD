import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//const port =process.env.PORT ||3000;
const port = parseInt(process.env.PORT, 10) || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`,'Bootstrapaaaa');
}
bootstrap();
