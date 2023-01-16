import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { Data } from './entities/datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DataController],
  providers: [DataService],
  imports: [
    TypeOrmModule.forFeature([ Data ]),
    AuthModule
  ],
})
export class DataModule {}
