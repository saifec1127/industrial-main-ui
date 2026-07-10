export const GET_USERS_QUERY = `
  query GetUsers {
    users {
      success
      message
      data {
        id
        name
        role
        createdAt
        updatedAt
      }
    }
  }
`;