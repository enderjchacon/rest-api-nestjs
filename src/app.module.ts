import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './config/database.config';
import { PostsModule } from './app/modules/posts.module';


@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({ isGlobal: true,  }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})


export class AppModule {}
