import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component ejemplo: {text}</div>
}

export { ExampleComponent }
