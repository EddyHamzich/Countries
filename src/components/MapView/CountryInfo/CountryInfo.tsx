import Link from "next/link"
import Image from "next/image"
import { ICountry } from "../../../types"
import styles from "./CountryInfo.module.css"

interface IProps {
  country: ICountry|undefined
}

export default function CountryInfo(props: IProps): JSX.Element {
  return (
    <summary className={styles.countryInfo}>
      {props.country
        ?
          <>
            <h3>{props.country.name}</h3>
            <Image src={`/flags/${props.country.code?.toLowerCase()}.svg`} width="100" height="100" />
            <Link href={{
              pathname: `/country/${props.country.code}`,
            }}>
              View Details
            </Link>
          </>
        :
          <p>No country selected.</p>
      }
    </summary>
  )
}
