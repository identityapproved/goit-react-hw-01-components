import PropTypes from 'prop-types';
import { Section, Title } from './StatisticSection.styled';
import { StatsInfo } from '../StatsInfo/StatsInfo'

export const StatisticSection = ({ stats }) => {
   return (
      <Section>
         <Title>Upload stats</Title>
         {stats.map(({ id, label, percentage }) => (
            <StatsInfo
               id={id}
               label={label}
               percentage={percentage}
            />
         ))}
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