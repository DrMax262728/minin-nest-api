import { Injectable } from '@nestjs/common';
import { PostDocument, UserPost } from './schemas/posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class UserPostsService {
  constructor(
    @InjectModel(UserPost.name) private postModel: Model<PostDocument>,
  ) {}

  async getPosts(): Promise<UserPost[]> {
    return this.postModel.find().exec();
  }

  async createPost(createPostDto: CreatePostDto): Promise<UserPost> {
    const model = new this.postModel(createPostDto);
    return model.save();
  }
}
