import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid #ececec;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 21px;
    padding-bottom: 21px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  color: var(--primaryBlackColor);

  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    margin-right: 88px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
    margin-right: 90px;
  }
`;
