import CountryPage from "../src/pages/country/[country]"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

let mockData = {
  code: "CH",
  name: "Switzerland",
}

it("renders a country page", async () => {
  render(
    <CountryPage
      country={mockData}
    />
  )
  expect(screen.getByText("Switzerland")).toBeInTheDocument()
})

it("renders ErrorBox if serverSideProps contains error", async () => {
  render(
    <CountryPage
      country={undefined}
      error={"Weird error."}
    />
  )
  expect(screen.getByText("Oops! Something went wrong.")).toBeInTheDocument()
  expect(screen.getByText("Weird error.")).toBeInTheDocument()
})