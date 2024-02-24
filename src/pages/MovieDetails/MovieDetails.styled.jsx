import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  padding: 0 20px 0 0;
`;

export const ListInfo = styled.ul`
  display: flex;
  gap: 12px;
  padding: 0 0 20px 0;
`;

export const Button = styled.button`
  padding: 8px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: #4f46e5;
    border: 3px solid #4f46e5;
  }
`;
