import styled from 'styled-components';

export const ProfileStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  padding: 10px;
  border-radius: 4px;
  background-color: #d8d8d8;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    img {
      height: 200px;
    }
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
