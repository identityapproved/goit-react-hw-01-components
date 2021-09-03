import PropTypes from 'prop-types';
import { StatsList, StatsItem, Label, Percentage } from './StatsInfo.styled'

export const StatsInfo = ({ id, label, percentage }) => {
   return (
      <StatsList>
         <StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
         </StatsItem>
      </StatsList>
   )
};

StatsInfo.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
}