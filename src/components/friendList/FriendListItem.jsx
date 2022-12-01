import PropTypes from 'prop-types';
import { SpanStyled } from './FriendList.styled';

export const FriendListItem = ({ friend: { avatar, isOnline, name } }) => {
  return (
    <>
      <SpanStyled isOnline={isOnline}></SpanStyled>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
