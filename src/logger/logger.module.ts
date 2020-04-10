import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyLogger } from './my-logger.service';

@Module({
  providers: [MyLogger],
  exports :[MyLogger],
})
export class LoggerModule {}
