import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .item {
    display: flex;
    gap: 6px;
    align-items: center;
  }
`;

export const SpanStyled = styled.span.attrs({
  className: 'status',
})`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
