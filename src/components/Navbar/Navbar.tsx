import React from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Countries.</Link>
    </nav>
  )
}
