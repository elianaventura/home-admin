import styles from './page.module.css';
import TestComponent from '@/components/TestComponent';

async function getData() {
  const data = await fetch('https://restcountries.com/v3.1/name/argentina', { cache: 'no-store' });
  const jsonData = await data.json();
  return jsonData;
};

export default async function Home() {
  const data = await getData();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          INITIAL PAGE
          <TestComponent show={data[0].name.common} />
        </div>
      </main>
    </>
  )
}
