import PropTypes from 'prop-types'
import { Avatar, Item, Name, Status } from './ItemsEl.styled';

export const ItemsEl = ({ avatar, name, isOnline, id }) => {
   return (
      <Item key={id}>
         <Avatar src={avatar} alt={name} />
         <Status isOnline={isOnline}></Status>
         <Name>{name}</Name>
      </Item>
   )
};

ItemsEl.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
}