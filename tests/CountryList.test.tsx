import CountryList from "../src/components/MapView/CountryList/CountryList"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

let mockData = [
  {
    code: "CH",
    name: "Switzerland",
  },
  {
    code: "IS",
    name: "Iceland",
  }
]

it("renders a list of countries", async () => {
  render(
    <CountryList
      countries={mockData}
      selectedCountry={mockData[0]}
      setSelectedCountry={() => {}}
    />
  )
  expect(screen.getByText("Switzerland")).toBeInTheDocument()
})

it("changes background of selected country", async () => {
  render(
    <CountryList
      countries={mockData}
      selectedCountry={mockData[0]}
      setSelectedCountry={() => {}}
    />
  )
  expect(screen.getByText("Switzerland")).toHaveStyle("background-color: #1F2142")
})

it("contains the same amount of items as the array", async () => {
  render(
    <CountryList
      countries={mockData}
      selectedCountry={mockData[0]}
      setSelectedCountry={() => {}}
    />
  )
  const items = await screen.findAllByRole("listitem")
  expect(items).toHaveLength(2)
})