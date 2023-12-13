export interface PostRepository {
  getById(id: string): Promise<boolean>;
  postOwnUser(id: string, idUser: string): Promise<boolean>;
}
