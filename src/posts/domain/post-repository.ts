import { Post } from "./post";

export interface PostRepository {
  getById(id: string): Promise<Post | null>;
}
