import google from '../../images/google.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import toast from 'react-hot-toast';
import { BtnSubmitGoogle, GoogleIcon } from './Auth.styled';

export const AuthProvider = ({ onRequestClose }) => {
  function handleSubmitWithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        onRequestClose();
      })
      .catch((error) => {
        toast.error(`Could not find account, ${error}`, {
          duration: 5000,
          position: 'top-right',
        });
      });
  }

  return (
    <BtnSubmitGoogle onClick={handleSubmitWithGoogle}>
      Continue with
      <GoogleIcon src={google} alt="google" />
    </BtnSubmitGoogle>
  );
};
