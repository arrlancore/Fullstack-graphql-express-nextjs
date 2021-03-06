"use strict";

import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getUsers: [User!]!
    getUser(id: ID): User!
    myProfile: User!
  }
  extend type Mutation {
    signUp(input: UserCreateInput!): Token!
    signIn(login: String!, password: String!): Token!
    updateUser(input: UserUpdateInput!): User!
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    email: EmailAddress!
    role: String!
    password: String
    createdAt: DateTime!
    updatedAt: DateTime!
    bio: String
    profileImageUrl: String
    links: UserLinks!
    address: UserAddress!
    status: String!
  }

  type UserLinks {
    github: String
    twitter: String
    website: String
    blog: String
  }

  type UserAddress {
    provinsi: String
    kotaKabupaten: String
  }

  type UserSkills {
    language: String
    tools: String
  }

  type Token {
    token: String!
  }

  input UserCreateInput {
    username: String!
    email: EmailAddress!
    password: String!
  }
  input UserUpdateInput {
    id: ID!
    username: String
    email: EmailAddress
    password: String
    role: UserRoles
  }

  enum UserRoles {
    ADMIN
    USER
    MODERATOR
  }

  enum UserStatuses {
    PENDING
    SUSPENSE
    VERIFIED
  }
`;
