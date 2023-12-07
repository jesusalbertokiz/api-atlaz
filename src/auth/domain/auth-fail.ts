export class AuthFail extends Error {
  constructor() {
    super(`User has failed authentication"`);
  }
}
