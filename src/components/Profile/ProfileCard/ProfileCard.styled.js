import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: auto;
  margin: 20px;
  padding: 0;
  border: 2px solid black;
  border-radius: 4px;
  transition: all .3s ease;
    &:hover{
  border-color: #4267B2;
  background: #4267B2;
}
`;