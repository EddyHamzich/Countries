import React from "react"
import { ICountry } from "../../../types"
import styles from "./CountryList.module.css"

interface IProps {
  countries: ICountry[]|undefined,
  selectedCountry: ICountry|undefined,
  setSelectedCountry: (country: ICountry) => void
}

export default function CountryList({ countries, setSelectedCountry, selectedCountry }: IProps) {
  return (
    <ul className={styles.list} data-testid="list">
      {countries?.map((country) =>
        <li
          key={country.code}
          onClick={() => setSelectedCountry(country)}
          style={country.code === selectedCountry?.code ? { background: "#1F2142" } : {}}
        >
          {country.name}
        </li>
      )}
    </ul>
  )
}
