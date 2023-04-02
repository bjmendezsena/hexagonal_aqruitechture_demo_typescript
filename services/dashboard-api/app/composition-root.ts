import { DashboardApi } from "./dashboard-api";
import { ControlAuthenticatorStub } from "../adapters/driven/control-authenticator-stub-adapter";
import { RepoQuerierStub } from "../adapters/driven/repo-querier-stub-adapter";
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return { authenticatorProxyAdapter };
};


export const { authenticatorProxyAdapter } = compositionMock();


const registerMock= {
    name: "register",
    email: "email@test.com",

}

authenticatorProxyAdapter.login("jhon@gmail.com", "12345678");
authenticatorProxyAdapter.register(registerMock, "12345678");