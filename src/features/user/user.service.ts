import { ENV } from "../../config/env";
import { GET_USERS_QUERY } from "./user.queries";
import type { User, UsersGraphQLResponse } from "./user.types";

export async function fetchUsersGraphQL(): Promise<User[]> {
  const response = await fetch(ENV.graphqlApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_USERS_QUERY,
    }),
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