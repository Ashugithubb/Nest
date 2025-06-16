import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CatModule } from './cat/cats.module';

 
@Module({
  imports: [AuthModule, UserModule, BookmarkModule,CatModule],
 
})
export class AppModule {}
