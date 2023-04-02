import {
  AuthDetails,
  ForControlAuthenticating,
  Permissions,
} from "../ports/driven";
import {
  AuthenticatedUser,
  ForAuthenticating,
  ForRepoQuering,
  User,
} from "../ports/drivers";

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly authenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuering
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const authDetails = await this.authenticator.getAuthDetails(
      email,
      password
    );
    const permissions = await this.authenticator.getPermissions(
      email,
      password
    );
    const user = await this.repoQuerier.getUser(email);
    return {
      ...user,
      ...permissions,
      ...authDetails,
    };
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user, password);

    const authDetails = await this.authenticator.getAuthDetails(
      newUser.email,
      password
    );

    const permissions = await this.authenticator.getPermissions(
      newUser.email,
      password
    );

    return {
      ...newUser,
      ...permissions,
      ...authDetails,
    };
  }
}
