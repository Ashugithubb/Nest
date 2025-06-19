import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CatModule } from './cat/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { METHODS } from 'http';
import { P3Module } from 'src/provider3/p3.module';
import { UserModule } from './Eocommerce/user.module';
import { TaskModule } from 'Task/Task.module';
import { MyServices } from './logger/loggerservices';
import { LoggerModule } from './logger/logger.module';
import { RepoModule } from './Dynamic/repo.module';

 
@Module({
  imports: [AuthModule,BookmarkModule,CatModule,P3Module,UserModule,TaskModule,LoggerModule,RepoModule]
 
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes({path: 'cats', method:RequestMethod.GET});
  }
}
