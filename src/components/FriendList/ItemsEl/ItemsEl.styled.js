import styled from '@emotion/styled';

export const Item = styled.li`
   position: relative;
   padding: 10px;
   border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
`;

export const Status = styled.span`
   position: absolute;
   bottom: 3px;
   left: 3px;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: ${(props) => `${props.isOnline ? props.theme.colors.red : props.theme.colors.green}`};
`;

export const Avatar = styled.img`
   width: 60px;
   height: auto;
   object-fit: fill;
   padding: 10px;
`;

export const Name = styled.p`
   padding-bottom: 5px;
   color: ${(props) => `${props.theme.colors.primaryText}`};
`;