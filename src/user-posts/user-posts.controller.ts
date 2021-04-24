import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserPostsService } from './user-posts.service';
import { UserPost } from './schemas/posts.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('user-posts')
export class UserPostsController {
  constructor(private readonly postService: UserPostsService) {}

  @Get()
  getPosts(): Promise<UserPost[]> {
    return this.postService.getPosts();
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<UserPost> {
    return this.postService.createPost(createPostDto);
  }
}
