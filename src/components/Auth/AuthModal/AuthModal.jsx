import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import { ModalHeader, CloseBtn } from './AuthModal.styled';
// import SpriteIcon from '../../../images/sprite.svg';

const Custom = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    padding: '64px',
    zIndex: '9999',
    overflowY: 'auto',
    maxHeight: '90vh',
    scrollbarColor: '#888 #e0e0e0',
    scrollbarWidth: 'thin',
  },
  overlay: {
    zIndex: '1000',
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
};

Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');

export const AuthModal = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={Custom}>
      <ModalHeader>
        <CloseBtn onClick={onRequestClose}>
          <svg width="32" height="32">
            <use xlinkHref={`${SpriteIcon}#icon-x`} />
          </svg>
        </CloseBtn>
      </ModalHeader>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};
