import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsModel } from '../../posts/posts.interface';
import { PostsService } from '../../posts/posts.service';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public findAll(): Array<PostsModel> {
        return this.postsService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): PostsModel {
        return this.postsService.findOne(id);
    }

    @Post()
    public create(@Body() post: PostsModel): PostsModel {
        return this.postsService.create(post);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {  
        this.postsService.delete(id);
    }

    @Put(':id')
    public update(@Param('id', ParseIntPipe) id: number, @Body() post: PostsModel): PostsModel {
        return this.postsService.update(id, post);
    }
}
