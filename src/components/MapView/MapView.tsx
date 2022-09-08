import styles from "./MapView.module.css"
import { useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { geoData } from "./config/geoData"
import { mapStyles, selectedStyle } from "./config/mapStyles"
import { ICountries, ICountry } from "../../types"
import { titleCase } from "../../util"

import CountryInfo from "./CountryInfo/CountryInfo"
import CountryList from "./CountryList/CountryList"
import SearchBar from "./SearchBar/SearchBar"

export default function MapView({ countries }: ICountries): JSX.Element {

  const [selectedCountry, setSelectedCountry] = useState<ICountry|undefined>()
  const [searchText, setSearchText] = useState("")

  return (
    <div className={styles.mapLayout} data-testid="MapView">

      <div className={styles.sideView}>
        <CountryInfo country={selectedCountry} />
        <SearchBar
          value={searchText}
          onChange={(e) => {
            setSearchText(prev => e.target.value)
            setSelectedCountry(prev =>
              countries?.find((country) => country.name?.includes(titleCase(e.target.value)))
            )
          }}
        />
        <CountryList
          countries={countries?.filter((country) => country.name?.includes(titleCase(searchText)))}
          selectedCountry={selectedCountry}
          setSelectedCountry={(country) => setSelectedCountry(country)}
        />
      </div>

      <ComposableMap className={styles.map}>
        <ZoomableGroup center={[0, 10]} zoom={1.2}>
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo, i) => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                style={selectedCountry?.name === geo.properties.name
                  ? selectedStyle
                  : mapStyles
                }
                onClick={() => setSelectedCountry(prev =>
                  countries?.find((country) => country.name === geo.properties.name)
                )}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

    </div>
  )
}