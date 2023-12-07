import { Post } from "../domain/post";
import { PostNotFound } from "../domain/post-not-found";
import { PostRepository } from "../domain/post-repository";

export class PostFindById {
  constructor(private readonly postRepository: PostRepository) {}

  async run(id: string): Promise<Post> {
    const user = await this.postRepository.getById(id);

    if (!user) {
      throw new PostNotFound(id);
    }

    return user;
  }
}
