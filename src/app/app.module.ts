import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { connectDB } from '../utils/config';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { ProjectModule } from 'src/projects/projects.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:['.env']
  }),MongooseModule.forRootAsync({
    inject:[ConfigService],
    useFactory: connectDB
  }),
  CloudinaryModule,
  ProjectModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
