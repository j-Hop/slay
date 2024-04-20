import styled from 'styled-components';
import { theme } from '../../theme';
import { Field } from 'formik';

export const ModalContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(10)};
  margin-block-end: ${theme.spacing(20)};

  h3 {
    font-weight: 500;
    line-height: 1.2;
    color: ${theme.colors.black};
  }

  p {
    font-weight: 400;
    line-height: 1.25;
    color: rgba(17, 16, 28, 0.5);
  }
`;

export const ModalAvatar = styled.img`
  border-radius: ${theme.radius.m};
`;

export const WrapperModal = styled.div`
  display: flex;
  gap: ${theme.spacing(7)};
  margin-block-end: ${theme.spacing(20)};

  p {
    font-weight: 500;
    line-height: 1.33;
    color: ${theme.colors.grey};
    margin-block-end: ${theme.spacing(2)};
  }

  h3 {
    font-weight: 500;
    line-height: 1.5;
    color: ${theme.colors.black};
  }
`;

export const CardStyleMini = styled.label`
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${theme.radius.xxs};
  inline-size: 232px;
  outline: none;
  margin-inline-end: ${theme.spacing(4)};
  margin-block-end: ${theme.spacing(8)};
`;

export const CardStyledBig = styled.label`
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${theme.radius.xxs};
  inline-size: 100%;
  outline: none;
  margin-block-end: ${theme.spacing(8)};
`;

export const CardStyleComment = styled.label`
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${theme.radius.xxs};
  inline-size: 100%;
  outline: none;
  height: 116px;
`;

export const CardGroup = styled(Field)`
  display: flex;
  margin-block-end: ${theme.spacing(20)};
`;

export const ModalTime = styled.div`
  cursor: pointer;
  overflow: hidden;
  appearance: none;
  outline: none;
  padding: ${theme.spacing(8)};
  border: none;
  border-radius: ${theme.radius.xxs};

  &#time {
    inline-size: 151px;
  }

  option {
    color: rgba(17, 16, 28, 0.3);
  }

  p {
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
    color: ${theme.colors.grey};
  }

  h2 {
    font-weight: 500;
    line-height: 1.5;
    font-size: 16px;
    color: ${theme.colors.black};
  }

  &:hover {
    color: ${theme.colors.black};
  }
`;

export const TimeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 16px;
  right: 18px;
  transform: translateY(-50%);
  transition: fill ${theme.transition};

  %:hover {
    fill: ${theme.colors.green};
  }
`;

export const StyledModal = styled.button`
  display: flex;
  flex-direction: column;
  max-inline-size: 480px;
`;
