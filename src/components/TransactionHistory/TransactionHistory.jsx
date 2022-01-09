import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  // console.log(items);
  let trNumber = 0;
  const transactionRender = items.map(item => {
    trNumber = trNumber + 1;
    console.log(trNumber);
    const trColorStyle = trNumber % 2 !== 0 ? '#0000001f' : 'white';
    return (
      <tr key={item.id} style={{ backgroundColor: trColorStyle }}>
        <td className={(styles.td, styles.tdFirst)}>{item.type}</td>
        <td className={styles.td}>{item.amount}</td>
        <td className={styles.td}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={(styles.th, styles.thMiddle)}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionRender}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
