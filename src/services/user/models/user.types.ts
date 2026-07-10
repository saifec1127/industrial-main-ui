export type User = {
  id: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UsersGraphQLResponse = {
  data: {
    users: {
      success: boolean;
      message: string;
      data: User[];
    };
  };
};