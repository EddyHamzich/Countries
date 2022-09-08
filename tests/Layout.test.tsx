import Layout from "../src/components/Layout/Layout"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

it("renders a Layout", () => {
  render(<Layout children={<div>Hello</div>}/>)
  expect(screen.getByText("Hello")).toBeInTheDocument()
})