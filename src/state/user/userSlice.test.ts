import userReducer, { clearUsers, fetchUsers } from "./userSlice";
import type { User } from "../../services/user/models/user.types";

describe("userSlice", () => {
  const users: User[] = [
    {
      id: "1",
      name: "Saif",
      role: "Senior Software Engineer",
      createdAt: "2026-07-04T07:43:07.376Z",
      updatedAt: "2026-07-04T07:43:07.376Z",
    },
  ];

  test("should return initial state", () => {
    const result = userReducer(undefined, { type: "" });

    expect(result.users).toEqual([]);
    expect(result.loading).toBe(false);
    expect(result.error).toBeNull();
  });

  test("should handle fetchUsers pending", () => {
    const result = userReducer(undefined, fetchUsers.pending("", undefined));

    expect(result.loading).toBe(true);
    expect(result.error).toBeNull();
  });

  test("should handle fetchUsers fulfilled", () => {
    const result = userReducer(
      undefined,
      fetchUsers.fulfilled(users, "", undefined)
    );

    expect(result.loading).toBe(false);
    expect(result.users).toEqual(users);
  });

  test("should handle fetchUsers rejected", () => {
    const result = userReducer(
      undefined,
      fetchUsers.rejected(new Error("API failed"), "", undefined)
    );

    expect(result.loading).toBe(false);
    expect(result.error).toBe("API failed");
  });

  test("should clear users", () => {
    const initialState = {
      users,
      loading: false,
      error: null,
    };

    const result = userReducer(initialState, clearUsers());

    expect(result.users).toEqual([]);
    expect(result.loading).toBe(false);
    expect(result.error).toBeNull();
  });
});