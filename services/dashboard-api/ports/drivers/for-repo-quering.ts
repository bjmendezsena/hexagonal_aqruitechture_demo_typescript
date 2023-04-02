import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../drivers";

export interface ForRepoQuering {
  getUser(email: string): Promise<RepoUser>;
  createUser(email: User, password: string): Promise<RepoUser>;
}
