import styled from '@emotion/styled';

export const Description = styled.div`
   padding-bottom: 20px;
`;

export const Avatar = styled.img`
   width: 100%;
   height: auto;
   object-fit: fill;
   padding: 20px;
`;

export const Name = styled.p`
   padding-bottom: 3px;
   text-align: center;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.2;
   color: ${(props) => `${props.theme.colors.primaryText}`};
`;

export const Tag = styled.p`
   padding-bottom: 1vh;
   color: ${(props) => `${props.theme.colors.secondaryText}`};
`;

export const Location = styled.p`
   color: ${(props) => `${props.theme.colors.secondaryText}`};
`;

export const StatsList = styled.ul`
   display: flex;
   padding: 0;
   margin: 0;
   ${'' /* justify-content: space-around; */}
`;

export const StatsItem = styled.li`
   flex: 100%;
   padding: 10px;
   display: flex;
   flex-direction: column;
   border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
`;

export const Label = styled.span`
   font-weight: 500;
   font-size: 12px;
   line-height: 1.2;
   color: ${(props) => `${props.theme.colors.secondaryText}`};
`;

export const Quantity = styled.span`
  color: ${(props) => `${props.theme.colors.primaryText}`};
`;