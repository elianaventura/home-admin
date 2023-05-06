import styles from '../app/page.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PAGE 2 TITLE</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          PAGE 2
        </div>
      </main>
    </>
  )
}
