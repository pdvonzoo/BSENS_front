import { getCookie, deleteCookie } from "../Utils/utils";

export const typeDefs = `
  type Address: {
    addressType: String
    zonecode: String
    address: String
    roadAddress: String
    jibunAddress: String
    sido: String
    sigungu: String
    bname: String
    query: String
  }
`;

export const defaults = {
  auth: {
    __typename: "Auth",
    isLoggedIn: Boolean(getCookie("access-token")) || false
  }
};

export const resolvers = {
  Mutation: {
    logUserIn: (_: any, __: any, { cache }: any) => {
      cache.writeData({
        data: {
          isLoggedIn: !!getCookie("access-token")
        }
      });
      return null;
    },
    logUserOut: (_: any, __: any, { cache }: any) => {
      deleteCookie("access-token");
      window.location.href = "/";
      return null;
    }
  }
};
