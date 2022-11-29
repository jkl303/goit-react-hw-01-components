import styled from 'styled-components';

export const StatisticStyled = styled.section`
  width: 360px;
  .title {
    text-align: center;
  }
  .stat-list {
    display: flex;
    .item {
      display: flex;
      width: 100%;
      padding: 4px;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const randomBgColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
