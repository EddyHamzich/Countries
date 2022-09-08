import React from "react"
import styles from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}