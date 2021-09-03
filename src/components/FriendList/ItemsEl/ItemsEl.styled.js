import styled from '@emotion/styled';

export const Item = styled.li`
   padding: 10px;
   border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
`;

export const Status = styled.span`
   color: ${(props) => `${props.theme.colors.secondaryText}`};
`;

export const Avatar = styled.img`
   width: 48px;
   height: auto;
   object-fit: fill;
   padding: 10px;
`;

export const Name = styled.p`
   color: ${(props) => `${props.theme.colors.primaryText}`};
`;