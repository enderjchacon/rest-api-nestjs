import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Users } from '../../../entities/users/users.entity';
import { UsersService } from '../../../services/users/user.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly postsService: UsersService) {}

    @Get()
    public findAll()  {
        return this.postsService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<Users>  {
        return this.postsService.findOne(id);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {  
        this.postsService.remove(id);
    }
}
