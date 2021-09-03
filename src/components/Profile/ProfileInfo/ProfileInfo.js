import PropTypes from 'prop-types';
import { Description, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from './ProfileInfo.styled';


export const ProfileInfo = ({ name, tag, location, avatar, stats }) => {
   return (
      <>
         <Description>
            <Avatar
               src={avatar}
               alt="Аватар пользователя"
            />
            <Name>{name}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
         </Description>

         <StatsList>
            <StatsItem>
               <Label>Followers </Label>
               <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
               <Label>Views </Label>
               <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
               <Label>Likes </Label>
               <Quantity>{stats.likes}</Quantity>
            </StatsItem>
         </StatsList>
      </>
   )
};

ProfileInfo.propTypes = {
   name: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   stats: PropTypes.string.isRequired,
}