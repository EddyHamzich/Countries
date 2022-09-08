import { gql } from "graphql-request"

export const COUNTRY_DETAILS = gql`
query Country($code: ID!) {
  country(code: $code) {
    name
    code
    capital
    currency
    phone
    native
    emoji
  }
}`