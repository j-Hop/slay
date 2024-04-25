import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import {
  ModalContainer,
  CardGroup,
  CardStyleComment,
  CardStyleMini,
  CardStyledBig,
  WrapperModal,
  TimeBtn,
  StyledModal,
  ModalTime,
} from './NanniesModal.styled';
import { BtnSubmit, ErrMsg } from '../../Auth/Auth.styled';
import SpriteIcon from '../../../images/sprite.svg';
import { useState } from 'react';
import { Time } from './NanniesMiniModal';

const Order = Yup.object({
  address: Yup.string()
    .min(3, `Must least 3 symbols`)
    .max(64, `At most 64 symbols`)
    .required(`This ia a required field`),
  number: Yup.string()
    .min(9, `Simple Format: XXX-XX-XX`)
    .max(9, `Simple Format: XXX-XX-XX`)
    .required(`This is a required field`)
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and dashes.'
    ),
  childAge: Yup.number()
    .min(1, `Must be 1 number`)
    .max(2, `At most 2 number`)
    .required(`This is a required field`),
  time: Yup.string().required(`Chose one option`),
  email: Yup.string()
    .email('Invalid email adress')
    .required('This is a required field'),
  name: Yup.string()
    .min(3, `Must be 3 symbols`)
    .max(32, `At most 32 symbols`)
    .required(`This is a required field`),
  comment: Yup.string()
    .min(4, `Must be 4 symbols`)
    .max(2000, `At most 2000 symbols`)
    .required(`This is a required field`),
});

export const NanniesModal = ({ card, onRequestClose }) => {
  const [isTimeOpen, setTimeOpen] = useState(false);
  const handleSubmit = ({ resetForm }) => {
    toast.success(`Successfully sent date`, {
      position: 'top-right',
      duration: 5000,
    });
    resetForm();
    onRequestClose();
  };

  const handleToggleTime = () => {
    setTimeOpen(true);
  };

  const closeTime = () => {
    setTimeOpen(false);
  };

  return (
    <Formik
      initialValues={{
        address: '',
        number: '',
        childAge: '',
        time: '',
        email: '',
        name: '',
        comment: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Order}
    >
      <StyledModal>
        <ModalContainer>
          <h3>Make an appointment with a babysitter</h3>
          <p>
            Arranging a meeting with a caregiver for your child is the first
            step to creating a safe and comfortable environment. Fill out the
            form below so we can match you with the perfect care partner.
          </p>
        </ModalContainer>

        <WrapperModal>
          <p>Your nanny</p>
          <h3>{card.name}</h3>
        </WrapperModal>

        <CardGroup>
          <label aria-label="Field for address">
            <CardStyleMini name="address" type="text" placeholder="Address" />
            <ErrMsg name="address" component="div" />
          </label>

          <label aria-label="Field for Child is age">
            <CardStyleMini type="number" placeholder="Child is age" />
            <ErrMsg name="childAge" component="div" />
          </label>

          <label aria-label="Field for number">
            <CardStyleMini name="number" type="tel" placeholder="+380" />
            <ErrMsg name="number" component="div" />
          </label>

          <label aria-label="Field for time">
            <CardStyleMini name="time" type="number" placeholder="00:00" />
            <ErrMsg name="time" component="div" />
            <TimeBtn onClick={handleToggleTime} type="text">
              <svg width="20" height="20">
                <use xlinkHref={`${SpriteIcon}#icon-clock}`} />
              </svg>
            </TimeBtn>
          </label>

          <label aria-label="Field for email">
            <CardStyledBig name="email" type="email" placeholder="Email" />
            <ErrMsg component="div" name="email" />
          </label>

          <label aria-label="Field for Father is or mother is name">
            <CardStyledBig
              name="name"
              type="text"
              placeholder="Father is or mother is name"
            />
            <ErrMsg component="div" name="name" />
          </label>

          <label aria-label="Field for comment">
            <CardStyleComment
              name="comment"
              type="text"
              placeholder="Comment"
            />
            <ErrMsg component="div" name="comment" />
          </label>
        </CardGroup>

        <BtnSubmit type="submit">
          <span>Send</span>
        </BtnSubmit>
        <Time id="time" isOpen={isTimeOpen} onRequestClose={closeTime}>
          <ModalTime onRequestClose={closeTime} />
        </Time>
      </StyledModal>
    </Formik>
  );
};
