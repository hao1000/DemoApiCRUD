import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class DataInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    if (req) {
      const method = req.method;
      const url = req.url;
      return next.handle().pipe(
        tap(() =>
          Logger.log(`Log1: ${method} ${url} ${Date.now() - now}ms`,
            context.getClass().name,
          ),
        ),
      );
    } else {
      const ctx: any = GqlExecutionContext.create(context);
      const resolverName = ctx.constructorRef.name;
      const info = ctx.getInfo();

      return next.handle().pipe(
        tap(() =>
          Logger.log(
            `Log2: ${info.parentType} "${info.fieldName}" ${Date.now() - now}ms`,
            resolverName,
          ),
        ),
      );

    }
  }
}