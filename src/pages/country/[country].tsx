import type { NextPage } from "next"
import Head from "next/head"
import { client } from "../../graphql/client"
import { COUNTRY_DETAILS } from "../../graphql/queries/COUNTRY_DETAILS"
import { ICountry } from "../../types"

import Layout from "../../components/Layout/Layout"
import ErrorBox from "../../components/ErrorBox/ErrorBox"
import CountryDetail from "../../components/CountryDetail/CountryDetail"

interface IQueryProps {
  params: {
    country: string
  }
}

export async function getServerSideProps({ params }: IQueryProps) {
  try {
    const data = await client.request(COUNTRY_DETAILS, { code: params.country })
    return { props: { country: data.country } }
  } catch(err) {
    return { props: { error: JSON.stringify(err) } }
  }
}

interface IPageProps {
  country?: ICountry
  error?: string
}

export const CountryPage: NextPage<IPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{`Countries - ${props.country?.name}`}</title>
      </Head>

      <Layout>
        {props.country
          ? <CountryDetail country={props.country} />
          : <ErrorBox error={props.error as string} />
        }
      </Layout>
    </>
  )
}

export default CountryPage