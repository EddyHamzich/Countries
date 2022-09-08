import CountryInfo from "../src/components/MapView/CountryInfo/CountryInfo"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

let mockData = {
  code: "CH",
  name: "Switzerland",
}

it("renders a country container", async () => {
  render(
    <CountryInfo
      country={mockData}
    />
  )
  expect(screen.getByText("Switzerland")).toBeInTheDocument()
})

it("renders text saying there is no selected country", async () => {
  render(
    <CountryInfo
      country={undefined}
    />
  )
  expect(screen.getByText("No country selected.")).toBeInTheDocument()
})

it("renders link to detail page", async () => {
  render(
    <CountryInfo
      country={mockData}
    />
  )
  expect(screen.getByText("View Details")).toHaveAttribute("href")
})