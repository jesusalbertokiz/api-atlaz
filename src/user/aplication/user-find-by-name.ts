import { User } from "../domain/user";
import { UserNotFound } from "../domain/user-not-found";
import { UserRepository } from "../domain/user-repository";

export class UserFindByName {
  constructor(private readonly userRepository: UserRepository) {}

  async run(name: string): Promise<User> {
    const user = await this.userRepository.getByName(name);

    if (!user) {
      throw new UserNotFound(name);
    }

    return user;
  }
}
