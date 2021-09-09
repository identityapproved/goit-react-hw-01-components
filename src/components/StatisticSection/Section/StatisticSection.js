import PropTypes from 'prop-types';
import { Section, Title } from './StatisticSection.styled';
import { StatsInfo } from '../StatsInfo/StatsInfo';
import { StatsList } from './StatisticSection.styled';
import { getRandomHex } from 'utils/randomHex';

export const StatisticSection = ({ stats }) => {
   return (
      <Section>
         {stats.title && <Title>{stats.title}</Title>}
         <StatsList>
            {stats.map(({ id, label, percentage }) => (
               <StatsInfo
                  key={id}
                  id={id}
                  label={label}
                  percentage={percentage}
            />
         ))}
         </StatsList>
      </Section>
   );
};

StatisticSection.propTypes = {
   stats: PropTypes.arrayOf(
      PropTypes.exact({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      }),
   ),
}

