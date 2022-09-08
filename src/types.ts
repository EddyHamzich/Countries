export interface ICountry {
  code?: string
  name?: string
  native?: string
  phone?: string
  continent?: IContinent
  capital?: string
  currency?: string
  languages?: ILanguage[]
  emoji?: string
  emojiU?: string
  states?: any
}

export interface ICountries {
  countries?: ICountry[]
}

export interface IContinent {
  code?: string
  name?: string
  countries?: ICountries
}

export interface ILanguage {
  code?: string
  name?: string
  native?: string
  rtl?: boolean
}