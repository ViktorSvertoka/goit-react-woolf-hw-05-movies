import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 2px #b4b4c6;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;
  margin-right: 20px;

  &.active {
    color: #4f46e5;
  }
`;
