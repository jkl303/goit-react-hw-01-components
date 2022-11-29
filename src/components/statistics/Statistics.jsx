import PropTypes from 'prop-types';
import { StatisticStyled, randomBgColor } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticStyled>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: randomBgColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </StatisticStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
