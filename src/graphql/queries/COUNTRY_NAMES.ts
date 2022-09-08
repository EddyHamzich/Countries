import { gql } from "graphql-request"

export const COUNTRY_NAMES =  gql`
query Countries {
  countries {
    code
    name
  }
}`