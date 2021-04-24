import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
// modules
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { UserPostsModule } from './user-posts/user-posts.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_PATH'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    ProductsModule,
    UserPostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
