import { Module } from '@nestjs/common';
import { P3Controller } from './p3.controller';
import { P2Module } from '../provider2/p2.module';
import { P3Service } from './p3.services';
import { Provider2 } from 'src/provider2/p2.services';
import { P4Module } from 'src/provider4/p4.module';

@Module({
  imports: [P4Module],
  controllers: [P3Controller],
  providers: [P3Service],
})
export class P3Module {}
