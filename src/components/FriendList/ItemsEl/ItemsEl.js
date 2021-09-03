import PropTypes from 'prop-types'
import { Avatar, Item, Name, Status } from './ItemsEl.styled';

export const ItemsEl = ({ avatar, name, isOnline, id }) => {
   return (
      <Item key={id}>
         <Status></Status>
         <Avatar src={avatar} alt={name} />
         <Name>{name}</Name>
      </Item>
   )
};