import PropTypes from 'prop-types';
import { Card } from './ProfileCard.styled';
import { ProfileInfo } from 'components/Profile/ProfileInfo/ProfileInfo';

export const ProfileCard = ({ data }) => {
   return (
      <Card>
         <ProfileInfo
            name={data.name}
            tag={data.tag}
            location={data.location}
            avatar={data.avatar}
            stats={data.stats}
         />
      </Card>
   );
};

ProfileCard.propTypes = {
   data: PropTypes.objectOf(
      PropTypes.exact({
         name: PropTypes.string.isRequired,
         tag: PropTypes.string.isRequired,
         location: PropTypes.string.isRequired,
         avatar: PropTypes.string.isRequired,
         stats: PropTypes.number.isRequired,
      }).isRequired,
   ),
};
