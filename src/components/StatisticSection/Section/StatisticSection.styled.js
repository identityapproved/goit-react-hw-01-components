import styled from '@emotion/styled';

export const Section = styled.section`
   margin: 0 auto;
   padding-bottom: 5px;
   ${'' /* display: flex; */}
   ${'' /* flex: 1 1 1; */}
`;

export const Title = styled.h2`
   padding: 5px;
   font-weight: 900;
   font-size: 16px;
   line-height: 1.36;
   letter-spacing: 0.06em;
   color: ${(props) => `${props.theme.colors.primaryText}`};
   text-transform: uppercase;
`;