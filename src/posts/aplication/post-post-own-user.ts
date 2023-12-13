import { PostNotFound } from "../domain/post-not-found";
import { PostRepository } from "../domain/post-repository";

export class PostPostOwnUser {
  constructor(private readonly postRepository: PostRepository) {}

  async run(id: string, idUser: string): Promise<boolean> {
    const user = await this.postRepository.postOwnUser(id, idUser);

    if (!user) {
      throw new PostNotFound(id);
    }

    return user;
  }
}
