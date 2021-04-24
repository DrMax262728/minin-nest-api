import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPostsController } from './user-posts.controller';
import { UserPostsService } from './user-posts.service';
import { UserPost, PostSchema } from './schemas/posts.schema';

@Module({
  controllers: [UserPostsController],
  providers: [UserPostsService],
  imports: [
    MongooseModule.forFeature([{ name: UserPost.name, schema: PostSchema }]),
  ],
})
export class UserPostsModule {}
