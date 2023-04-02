import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuering, User } from "../../ports/drivers";

const userMock: RepoUser = {
  id: "1",
  email: "email@test.com",
  name: "name",
};

export class RepoQuerierStub implements ForRepoQuering {
  async getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

  async createUser(_user: User, _password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
