import styled from 'styled-components';
import { theme } from '../../theme';

export const RevAvatar = styled.img`
  border-radius: ${theme.radius.xxl};
`;

export const RevContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(6)};
  margin-block: ${theme.spacing(24)} ${theme.spacing(8)};
`;

export const RevComment = styled.p`
  font-weight: 400;
  line-height: 1.25;
  margin-block-end: ${theme.spacing(12.5)};
`;

export const RevWrapper = styled.div`
  gap: ${theme.spacing(2)};

  h3 {
    color: ${theme.colors.black};
    font-weight: 500;
    line-height: 1.25;
  }

  p {
    font-weight: 500;
    line-height: 1.28;
    color: ${theme.colors.black};
  }

  svg {
    margin-inline-end: ${theme.spacing(6)};
    transform: translateY(2px);
  }
`;

export const NannyAvatar = styled.img`
  padding: ${theme.spacing(6)};
  border-radius: ${theme.radius.m};
  border: 2px solid rgba(16, 57, 49, 0.2);
  inline-size: 120px;
  block-size: 120px;
`;

export const CardBody = styled.div`
  max-inline-size: 992px;
`;

export const GreenDot = styled.svg`
  position: absolute;
  top: 9px;
  right: 14px;
  transition: fill ${theme.transition};
  background: none;
  border: none;
`;

export const HeaderCard = styled.div`
  display: flex;

  p {
    font-weight: 500;
    line-height: 1.5;
    display: inline-flex;
  }
`;

export const MainCardContainer = styled.div`
  padding: ${theme.spacing(12)};
  max-inline-size: 1184px;
  display: flex;
  border-radius: ${theme.radius.l};
  background-color: ${theme.colors.light};
  gap: ${theme.spacing(12)};
`;

export const ContAvatar = styled.div`
  flex-shrink: 0;
`;

export const VerticalLine = styled.span`
  color: rgba(17, 16, 28, 0.2);
  margin-inline: ${theme.spacing(8)};
`;

export const SubParagraph = styled.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.colors.grey};
`;

export const IconMap = styled.svg`
  margin-inline-end: ${theme.spacing(4)};
  transform: translateY(4px);
`;

export const IconStar = styled.svg`
  margin-inline-end: ${theme.spacing(4)};
  transform: translateY(4px);
`;

export const GreenPrice = styled.span`
  color: ${theme.colors.lightGreen};
  margin-inline-start: ${theme.spacing(2)};
`;

export const HeartBtn = styled.button`
  margin-inline-start: ${theme.spacing(24)};
  border: none;
  background: transparent;

  &:hover svg {
    @keyframes shadow {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.2;
      }
      100% {
        scale: 1;
      }
    }
    animation: shadow 0.5s ease infinite;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
`;

export const CardMain = styled.div`
  h2 {
    font-weight: 500;
    color: ${theme.colors.black};
    font-size: 24px;
    line-height: 1;
  }

  p {
    color: rgba(17, 16, 28, 0.5);
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
  }
`;

export const MainList = styled.ul`
  margin-block-end: ${theme.spacing(12)};
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};

  li {
    font-weight: 500;
    line-height: 1.5;
    background-color: ${theme.colors.lightGrey};
    border: ${theme.radius.l};
  }
`;

export const InfoLine = styled.span`
  color: ${theme.colors.grey};
  padding: ${theme.spacing(4)} ${theme.spacing(8)};
`;

export const UnderLine = styled.span`
  text-decoration: underline;
`;

export const BtnReadMore = styled.button`
  border: none;
  text-decoration: underline;
  background: transparent;
  font-weight: 500;

  &:active {
    display: none;
  }
`;

export const HiddenData = styled.div``;

export const BtnMake = styled.button`
  border: ${theme.radius.xl};
  background-color: ${theme.colors.green};
  max-inline-size: 215px;

  span {
    color: ${theme.colors.light};
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
    padding: ${theme.spacing(7)} ${theme.spacing(14)};
  }
`;

export const Wrapper = styled.div`
  padding-inline-start: 122px;
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const BtnLoadMore = styled.button`
  padding: ${theme.spacing(14)} ${theme.spacing(28)};
  border: none;
  border-radius: ${theme.radius.xl};
  background-color: ${theme.colors.green};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.lightGreen};
  }
`;

export const InfoText = styled.div`
  font-size: 40px;
  text-align: center;
  margin-block-start: 10%;
`;
