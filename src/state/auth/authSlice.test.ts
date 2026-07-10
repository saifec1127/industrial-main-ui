import authReducer, { loginSuccess, logout } from "./authSlice";

describe("authSlice", () => {
  test("should login user successfully", () => {
    const initialState = {
      user: null,
      isAuthenticated: false,
    };

    const action = loginSuccess({
      id: 1,
      name: "Saif",
      email: "saif@example.com",
    });

    const result = authReducer(initialState, action);

    expect(result.user?.name).toBe("Saif");
    expect(result.isAuthenticated).toBe(true);
  });

  test("should logout user successfully", () => {
    const initialState = {
      user: {
        id: 1,
        name: "Saif",
        email: "saif@example.com",
      },
      isAuthenticated: true,
    };

    const result = authReducer(initialState, logout());

    expect(result.user).toBeNull();
    expect(result.isAuthenticated).toBe(false);
  });
});