import { UserNotFound } from "../domain/user-not-found";
import { UserRepository } from "../domain/user-repository";

export class UserFindById {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string, role: string): Promise<boolean> {
    const user = await this.userRepository.getById(id, role);

    if (!user) {
      throw new UserNotFound(id);
    }

    return user;
  }
}
