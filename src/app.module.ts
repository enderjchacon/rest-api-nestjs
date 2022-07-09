import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 8889,
      username: 'root',
      password: 'inventories_sales',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})


export class AppModule {}
