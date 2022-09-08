import React from "react"
import styles from "./SearchBar.module.css"

interface IProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({ value, onChange }: IProps) {
  return (
    <input
    type="search"
    className={styles.searchInput}
    placeholder="Search for..."
    value={value}
    onChange={onChange}
    />
  )
}