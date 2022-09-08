import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./CountryDetail.module.css"
import { ICountry } from "../../types"
import { titleCase } from "../../util"

interface IProps {
  country: ICountry
}

export default function CountryDetail({ country }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <summary>
        <h2>
          {country.name}
        </h2>
        <Image
          src={`/flags/${country.code?.toLowerCase()}.svg`}
          width="200px"
          height="200px"
        />
      </summary>
      <ul className={styles.details}>
        {Object.keys(country).slice(2).map(key => (
          <li className={styles.item} key={key}>
            <Image src={`/icons/${key}.svg`} width="25px" height="25px" />
            <p>{titleCase(key)}: {country[(""+key) as keyof ICountry]}</p>
          </li>
        ))}
      </ul>
      <Link className={styles.backButton} href="/">Back to search</Link>
    </div>
  )
}
