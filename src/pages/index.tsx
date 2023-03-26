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
      <div className={styles.bolhas}>
        <span></span>
        <label></label>
        <div></div>
        <label></label>
        <span></span>
        <div></div>
        <main></main>
        <span></span>
        <div></div>
        <label></label>
        <main></main>
        <span></span>
        <label></label>
        <div></div>
        <label></label>
        <span></span>
        <main></main>
        <div></div>
        <label></label>
        <span></span>
        <div></div>
        <label></label>
        <main></main>
        <div></div>
        <label></label>
        <span></span>
        <div></div>
        <label></label>
        <label></label>
        <main></main>
        <span></span>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <Image className={styles.item} src='/nina.jpeg' alt='Nina' width={200} height={210} />
          <Image className={styles.item} src='/celestial.jpeg' alt='Celestia' width={200} height={210} />
          <Image className={styles.item} src='/belo.jpeg' alt='Obelix' width={200} height={210} />
        </div>
        <div className={styles.row}>
          <Image className={styles.item} src='/mel.jpeg' alt='Mel' width={200} height={210} />
          <Image className={styles.item} src='/gato.jpeg' alt='Gato' width={200} height={210} />
          <Image className={styles.item} src='/stella.jpeg' alt='Stella' width={200} height={210} />
        </div>

        <p className={styles.code}>Laura, esse é o mês do seu aniversário e estamos todos aqui com você pra te acompanhar nesse mês.🥳🎉🎁🎊</p>

      </div>
    </>
  )
}
