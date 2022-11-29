import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <ul className="stat-list">
        {data.map(stat => {
          return (
            <li className="item" key={stat.id}>
              {stat.title && <h2 className="title">{stat.title}</h2>}
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
