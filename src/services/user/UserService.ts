import { ENVIRONMENT } from "../../environments/environment";
import { GET_USERS_QUERY } from "./user.queries";
import type { User, UsersGraphQLResponse } from "./models/user.types";

export class UserService {
  public static async getUsers(): Promise<User[]> {
    const response = await fetch(ENVIRONMENT.graphqlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_USERS_QUERY }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const result: UsersGraphQLResponse = await response.json();
    const usersResponse = result.data.users;

    if (!usersResponse.success) {
      throw new Error(usersResponse.message || "Users fetch failed");
    }

    return usersResponse.data;
  }
}