import React from "react"
import styles from "./ErrorBox.module.css"

interface IProps {
  error: string
}

export default function ErrorBox({ error }: IProps): JSX.Element {
  return (
    <div className={styles.errorBox}>
      <p>Oops! Something went wrong.</p>
      <br />
      <p>{error}</p>
    </div>
  )
}
