import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
