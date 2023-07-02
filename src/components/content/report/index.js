import styles from './report.module.scss';

export default function Report({ id, reports_list }) {
  const renderReport = ({ id, display }, index) => {
    return (
      <div key={index} className={styles['report-card']}>
        {display}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {reports_list.map((report, index) => renderReport(report, index))}
    </div>
  );
};
