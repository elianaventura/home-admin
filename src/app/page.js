import styles from './page.module.css';
import Component from '@/components/factory/factory-from';

const DEFAULT_PAGE = 'supermarketItems';

async function getData(page) {
  const pageToFetch = page || DEFAULT_PAGE;
  const data = await fetch(`http://localhost:4000/initialPage/${pageToFetch}`, { cache: 'no-store' });
  const jsonData = await data.json();
  return jsonData;
};

export default async function Home({ searchParams }) {
  const data = await getData(searchParams.page);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          INITIAL PAGE
          {data.components.map((componentProps, index) => <Component key={index} {...componentProps} />)}
        </div>
      </main>
    </>
  )
}
