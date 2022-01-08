import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  // console.log(items);
  const transactionRender = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
