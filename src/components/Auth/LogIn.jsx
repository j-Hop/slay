import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import SpriteIcon from '../../images/sprite.svg';
import {
  EyeBtn,
  Title,
  StyledForm,
  StyledInput,
  BtnSubmit,
  ErrMsg,
  PasswordLabel,
  StyledInputPassword,
} from './Auth.styled';

const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email adress')
    .required('This is a required field'),
  password: Yup.string()
    .min(8, 'Must least 8 symbols')
    .max(64, 'At most 64 symbols')
    .required('This is a required field'),
});

export const Login = ({ onRequestClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        toast.success(`Welcome ${user.user.email}`, {
          position: 'top-right',
          duration: 5000,
          icon: '👋',
        });
        resetForm();
        onRequestClose();
      })
      .catch((error) =>
        toast.error(`Have a problem, ${error}`, {
          position: 'top-right',
          duration: 5000,
        })
      );
  };
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationShema={loginSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Title>Log In</Title>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
        <label>
          <StyledInput name="email" type="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>

        <PasswordLabel>
          <StyledInputPassword
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <ErrMsg name="password" component="div" />
          <EyeBtn onClick={() => handleTogglePassword()} type="password">
            <svg width="20" height="20">
              <use
                xlinkHref={
                  showPassword
                    ? `${SpriteIcon}#icon-eye`
                    : `${SpriteIcon}#icon-eye-off`
                }
              />
            </svg>
          </EyeBtn>
        </PasswordLabel>

        <BtnSubmit type="submit">
          <span>Log In</span>
        </BtnSubmit>
      </StyledForm>
    </Formik>
  );
};
