import PropTypes from 'prop-types';
import { getRandomHex } from 'utils/randomHex';
import { StatsList, StatsItem, Label, Percentage } from './StatsInfo.styled'

export const StatsInfo = ({ id, label, percentage }) => {
   return (

         <StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
         </StatsItem>
   )
};

StatsInfo.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
}