/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLoan = /* GraphQL */ `
  query GetLoan($id: ID!) {
    getLoan(id: $id) {
      id
      title
      subtitle
      amount
      repaid
      createdAt
      updatedAt
    }
  }
`;
export const listLoans = /* GraphQL */ `
  query ListLoans(
    $filter: ModelLoanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        amount
        repaid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
