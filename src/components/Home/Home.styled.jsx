import { theme } from '../theme';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  padding: ${theme.spacing(32)} ${theme.spacing(48)};
  inline-size: 1380px;
  background-color: ${theme.colors.green};
  block-size: 736px;
  border-radius: ${theme.radius.xl};
`;

export const HomeInfo = styled.div`
  position: absolute;
  max-inline-size: 530px;
  top: 251px;

  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    color: ${theme.colors.light};
    margin-block-end: ${theme.spacing(14)};
  }

  p {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.07;
    color: ${theme.colors.light};
    margin-block-end: ${theme.spacing(32)};
  }
`;

export const HomeImg = styled.img`
  height: 736px;
  max-width: 699px;
  transform: translate(585px, -64px);
`;

export const BtnStart = styled(NavLink)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: ${theme.radius.xl};
  background-color: transparent;
  padding: ${theme.spacing(9)} ${theme.spacing(25)};
  display: inline-block;
  transition: border ${theme.transition};
  display: flex;
  align-items: center;
  max-inline-size: 235px;

  &:hover {
    border: ${theme.colors.light};
  }

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: ${theme.colors.light};
    margin-inline-end: ${theme.spacing(9)};
  }
`;

export const InfoHomeBox = styled.div`
  padding: ${theme.spacing(16)};
  border: none;
  border-radius: 20px;
  background-color: ${theme.colors.light};
  position: relative;
  left: 937px;
  bottom: 230px;
  inline-size: 290px;
  display: flex;

  h2 {
    color: ${theme.colors.black};
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
  }

  p {
    color: rgba(17, 16, 28, 0.5);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
  }
`;

export const BoxCheck = styled.div`
  border: none;
  background-color: ${theme.colors.green};
  border-radius: 13px;
  margin-inline-end: ${theme.spacing(8)};
  width: 54px;
  height: 54px;
  padding: ${theme.spacing(9.75)} ${theme.spacing(8.5)};
`;

export const BoxWrap = styled.div`
display: flex;
flex-direction: column;
gap: ${theme.spacing(3)};
}
`;
