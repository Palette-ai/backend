import gql from 'graphql-tag';

export default gql`
  type User {
    email: String!
    username: String!
    password: String
    id: String
  }
  type Query {
    getUsers: User
  }

  type Mutation {
    createUser(username: String, email: String, password: String): User
  }
`;
