import { theme } from '../theme';
import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.2;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-inline-size: 440px;

  p {
    color: rgba(17, 16, 28, 0.5);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    margin-block-end: ${theme.spacing(20)};
  }
`;

export const StyledInput = styled(Field)`
  inline-size: 100%;
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border-radius: ${theme.radius.xxs};
  outline: none;
  border: 1px solid rgba(17, 16, 28, 0.1);
  margin-block-end: ${theme.spacing(9)};
  color: ${theme.colors.black};
`;

export const StyledInputPassword = styled(Field)`
  inline-size: 100%;
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border-radius: ${theme.radius.xxs};
  outline: none;
  border: 1px solid rgba(17, 16, 28, 0.1);
  margin-block-end: ${theme.spacing(20)};
  color: ${theme.colors.black};
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 12px;
  margin-block-end: ${theme.spacing(9)};
  color: ${theme.colors.error};
`;

export const PasswordLabel = styled.label`
  position: relative;
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 30%;
  right: 5%;
  transform: translateY(-50%);
  transition: fill ${theme.transition};

  &:hover {
    fill: ${theme.colors.green};
  }
`;

export const BtnSubmit = styled.button`
  padding: ${theme.spacing(8)};
  border: none;
  border-radius: ${theme.radius.xl};
  background-color: ${theme.colors.green};
  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.lightGreen};
  }

  span {
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
    color: ${theme.colors.light};
    white-space: nowrap;
  }
`;

export const BtnSubmitGoogle = styled.button`
  margin-block-start: ${theme.spacing(9)};
  padding-block: ${theme.spacing(8)};
  inline-size: 100%;
  background-color: transparent;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: ${theme.radius.xxs};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  transition:
    border-color ${theme.transition},
    color ${theme.transition};

  &:hover {
    border-color: ${theme.colors.green};
    color: ${theme.colors.lightGreen};
  }
`;

export const GoogleIcon = styled.img`
  margin-inline-start: 8px;
  transform: translateY(3px);
  display: inline-block;
  inline-size: 20px;
  block-size: 20px;
`;
