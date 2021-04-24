import { Test, TestingModule } from '@nestjs/testing';
import { UserPostsController } from './user-posts.controller';

describe('PostsController', () => {
  let controller: UserPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPostsController],
    }).compile();

    controller = module.get<UserPostsController>(UserPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
