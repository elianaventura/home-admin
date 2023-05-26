import styles from './page.module.css';
import TestComponent from '@/components/TestComponent';
import Accordion from '@/components/Accordion';

async function getData(country) {
  const data = await fetch(`https://restcountries.com/v3.1/name/${country}`, { cache: 'no-store' });
  const jsonData = await data.json();
  return jsonData;
};

export default async function Home({ searchParams }) {
  const data = await getData(searchParams.country);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          INITIAL PAGE
          <TestComponent show={data[0].name.common} />
          <Accordion />
        </div>
      </main>
    </>
  )
}
