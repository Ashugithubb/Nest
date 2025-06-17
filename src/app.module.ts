import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CatModule } from './cat/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { METHODS } from 'http';
import { P1Module } from 'provider1/p1.module';
import { TimeService } from 'provider2/p2.services';
import { P2Module } from 'provider2/p2.module';
import { P3Module } from 'provider3/p3.module';

 
@Module({
  imports: [AuthModule, UserModule, BookmarkModule,CatModule,P1Module,P2Module,P3Module],
 
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes({path: 'cats', method:RequestMethod.GET});
  }
}
