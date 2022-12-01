import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history" style={{ border: '4px solid blue' }}>
      <thead style={{ backgroundColor: '#6b6bcf' }}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => {
          return (
            <tr key={transaction.id}>
              <Transaction transaction={transaction} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <td style={{ width: '120px' }}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
