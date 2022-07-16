import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './app/modules/users/user.module';
import { TypeOrmConfigService } from './config/database.config';


@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true,  }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })
  ],
  controllers: [],
  providers: [],
})


export class AppModule {}
