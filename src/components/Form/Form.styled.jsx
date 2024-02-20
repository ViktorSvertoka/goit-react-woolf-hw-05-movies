import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px 8px;
  outline: none;

  &:hover {
    color: tomato;
    border: 3px solid tomato;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: tomato;
    border: 3px solid tomato;
  }
`;
