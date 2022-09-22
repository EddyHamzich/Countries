import React from "react"
import Image from "next/image"
import { ICountries } from "../../../types"

export default function FlagsPreload({ countries }: ICountries): JSX.Element {

  return (
    <ul>
      {countries?.map((country) => (
        <li
        key={country.code}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          visibility: "hidden",
          width: "1px",
          height: "1px",
        }}>
          <Image src={`/flags/${country.code?.toLowerCase()}.svg`} width="100" height="100" priority={true} />
        </li>
      ))}
    </ul>
  )
}
