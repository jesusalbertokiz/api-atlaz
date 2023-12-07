import { Post } from "../../domain/post";
import { PostRepository } from "../../domain/post-repository";
import { data } from "./postDatabase";

export class MySQLPostRepository implements PostRepository {
  async getById(id: string): Promise<Post | null> {
    const rawPost = data.find(post => post.id === id);

    return rawPost ? new Post(rawPost.id, rawPost.visibility) : null;
  }
}
