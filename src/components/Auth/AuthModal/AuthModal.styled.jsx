import styled from 'styled-components';
import { theme } from '../../theme';

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus,
  &:hover {
    scale: 1;
    color: ${theme.colors.green};
  }

  & svg {
    stroke: ${theme.colors.black};
    transition: stroke ${theme.transition};
  }
`;

export const ModalHeader = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;
