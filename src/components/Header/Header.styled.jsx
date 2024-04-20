import { theme } from '../theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  padding: ${theme.spacing(15)} ${theme.spacing(48)};
  border-bottom: 1px solid rgba(251, 251, 251, 0.4);
  position: absolute;
  width: 1380px;
  z-index: 1;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing(20)};
  margin-right: 92px;
`;

export const StyledLink = styled(NavLink)`
  line-height: 1.25;
  transition: color ${theme.transition};
  color: ${theme.colors.light};

  &:hover {
    color: ${theme.colors.primary};
  }

  &.active {
    border-bottom: 4px dotted ${theme.colors.light};
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.16;
  color: ${theme.colors.light};
  margin-right: 487px;
`;

export const IconUser = styled.img`
  display: inline-block;
  inline-size: 40px;
  block-size: 40px;
  background-color: ${theme.colors.light};
  border-radius: ${theme.radius.xxs};
  cursor: pointer;
`;

export const BtnLogIn = styled.button`
  border: 1px solid ${theme.colors.light};
  border-radius: ${theme.radius.xl};
  transition: color ${theme.transition};
  background-color: transparent;
  padding: ${theme.spacing(6)} ${theme.spacing(19.5)};
  margin-inline-end: ${theme.spacing(4)};

  &:hover {
    color: ${theme.colors.lightGreen};
  }

  span {
    font-weight: 500;
    line-height: 1.25;
    color: ${theme.colors.light};
  }
`;

export const BtnRegistartion = styled.button`
  border-radius: ${theme.radius.xl};
  background-color: ${theme.colors.green};
  transition:
    color ${theme.transition},
    background-color ${theme.transition};
  border: none;
  padding: ${theme.spacing(6)} ${theme.spacing(20)};

  &:hover {
    background-color: ${theme.colors.lightGreen};
  }

  span {
    font-weight: 500;
    line-height: 1.25;
    color: ${theme.colors.light};
  }
`;

export const BtnLogOut = styled.button`
  border: 1px solid ${theme.colors.light};
  border-radius: ${theme.radius.xl};

  &:hover {
    color: ${theme.colors.lightGreen};
  }

  span {
    font-weight: 500;
    line-height: 1.25;
    margin: ${theme.spacing(7)} ${theme.spacing(19.5)};
  }
`;

export const BtnBar = styled.div`
  display: flex;
`;

export const SpanName = styled.span`
  color: ${theme.colors.light};
  -webkit-text-fill-color: transparent;
`;
