import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CatModule } from './cat/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { METHODS } from 'http';


import { P3Module } from 'src/provider3/p3.module';

 
@Module({
  imports: [AuthModule, UserModule, BookmarkModule,CatModule,P3Module],
 
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes({path: 'cats', method:RequestMethod.GET});
  }
}
