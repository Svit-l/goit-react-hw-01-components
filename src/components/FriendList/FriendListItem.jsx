import PropTypes from 'prop-types';
import s from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineColor = isOnline ? s.status : s.status__false;

  return (
    <li className={s.item}>
      <span className={isOnlineColor}>{isOnline}</span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
