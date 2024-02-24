import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
