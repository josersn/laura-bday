import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Laura B-Day 🥳</title>
        <meta name="description" content="Entre todos os animais do mundo você é o mais bonito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/laura-bday.png" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
