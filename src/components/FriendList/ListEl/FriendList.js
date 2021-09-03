import PropTypes from 'prop-types'
import { ItemsEl } from '../ItemsEl/ItemsEl';
import { ListEl } from './FriendList.styled';

export const FriendList = ({ friends }) => {
   return (
      <ListEl>
         {friends.map(({ avatar, name, isOnline, id }) => (
            <ItemsEl
               avatar={avatar}
               name={name}
               isOnline={isOnline}
               id={id}
            />
         ))}
      </ListEl>
   )
};