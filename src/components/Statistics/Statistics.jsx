import PropTypes from 'prop-types';

const title = <h2 className="title">Upload stats</h2>;

export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && title}
      <ul className="stat-list">
        {stats.map(s => (
          <li key={s.id} className="item">
            <span className="label">{s.label}</span>
            <span className="percentage">{s.percentage}</span>
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
