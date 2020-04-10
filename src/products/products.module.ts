import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from 'src/shared/http-error.filter';
import { DataInterceptor } from 'src/shared/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService,
    //Show error :
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    // Show log :
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
  ],
  controllers: [ProductsController],
})
export class ProductsModule { }
