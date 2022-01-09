import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor } from './ColorRender.js';

export const Statistics = ({ stats, title }) => {
  const statWrapWidth = `${stats.length * 50}px`;
  // console.log(statWrapWidth);
  // console.log(title);
  return (
    <section className={styles.statistics} style={{ width: statWrapWidth }}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statisticList}>
        {stats.map(s => (
          <li
            key={s.id}
            className={styles.item}
            style={{ background: getRandomHexColor() }}
          >
            <span className={styles.label}>{s.label}</span>
            <span className={styles.percentage}>{s.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
