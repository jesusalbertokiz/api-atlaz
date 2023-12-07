import { User } from "../domain/user";
import { UserNotFound } from "../domain/user-not-found";
import { UserRepository } from "../domain/user-repository";

export class UserGetAll {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<User[] | null> {
    const user = await this.userRepository.getAll();

    if (!user) {
      throw new UserNotFound("No have users");
    }

    return user;
  }
}
