import { DashboardApi } from "../../app/dashboard-api";
import {
  ForAuthenticating,
  AuthenticatedUser,
  User,
} from "../../ports/drivers";

export class AuthenticatorProxyAdapter implements ForAuthenticating {
  constructor(private readonly dashboardApi: DashboardApi) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return this.dashboardApi.login(email, password);
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    return this.dashboardApi.register(user, password);
  }
}
