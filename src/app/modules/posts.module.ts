import { Module } from '@nestjs/common';
import { PostsService } from '../../posts/posts.service';
import { PostsController } from '../controllers/posts.controller';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
