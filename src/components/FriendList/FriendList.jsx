import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import s from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(f => {
        return (
          <FriendListItem
            key={f.id}
            avatar={f.avatar}
            name={f.name}
            isOnline={f.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
