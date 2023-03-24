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
      <audio autoPlay>
        <source src="musica.mp3" type="audio/mp3" />
      </audio>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>

          <p className={styles.code}>Laura, esse é o mês do seu aniversário e estamos todos aqui com você pra te acompanhar nesse mês.</p>

        </div>
      </main>
    </>
  )
}
