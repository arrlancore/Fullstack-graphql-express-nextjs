"use strict";

import { gql } from "apollo-server-express";
import authSchema from "./app/auth/schema";

const sharedSchema = gql`
  type PageInfo {
    """
    end cursor is reffered to createdAt (date) with hash base64
    """
    endCursor: String!
    hasNextPage: Boolean!
  }
`;

const schemas = [sharedSchema, authSchema];

export default schemas;
