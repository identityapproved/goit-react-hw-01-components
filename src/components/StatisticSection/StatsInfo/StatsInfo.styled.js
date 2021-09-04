import styled from '@emotion/styled';
import { getRandomHex } from 'utils/randomHex';

export const StatsList = styled.ul`
   padding: 0;
   margin: 0;
   background-color: ${getRandomHex()};
`;

export const StatsItem = styled.li`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 5px;
   border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
`;

export const Label = styled.span`
   font-weight: 500;
   font-size: 12px;
   line-height: 1.2;
   color: ${(props) => `${props.theme.colors.secondaryText}`};
`;

export const Percentage = styled.span`
  color: ${(props) => `${props.theme.colors.primaryText}`};
`;
