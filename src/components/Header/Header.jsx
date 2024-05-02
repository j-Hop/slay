import { useEffect, useState } from 'react';
import { AuthModal } from '../Auth/AuthModal/AuthModal';
import { Login } from '../Auth/LogIn';
import { SignUp } from '../Auth/SignUp';
import SpriteIcons from '../../images/sprite.svg';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';
import {
  BtnBar,
  BtnLogIn,
  BtnLogOut,
  BtnRegistartion,
  Logo,
  NavList,
  Navigation,
  SpanName,
  StyledLink,
  HeaderBox,
  IconUser,
} from './Header.styled';

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() =>
        toast.success('See you soon!', {
          duration: 5000,
          position: 'top-right',
          icon: '✌',
        })
      )
      .catch((error) =>
        toast.error(`Something went wrong! ${error}`, {
          duration: 5000,
          position: 'top-right',
        })
      );
  };

  return (
    <HeaderBox>
      <Navigation>
        <Logo>Nanny.Services</Logo>

        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/nannies">Nannies</StyledLink>
          </li>
          {authUser && (
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          )}
        </NavList>

        <div>
          {authUser ? (
            <>
              <IconUser>
                <svg width="16" height="16">
                  <use xlinkHref={`${SpriteIcons}#icon-mdi-user`} />
                </svg>
              </IconUser>
              <SpanName>{authUser.name}</SpanName>
              <BtnLogOut onClick={userSignOut}>
                <span>Log Out</span>
              </BtnLogOut>
            </>
          ) : (
            <BtnBar>
              <BtnLogIn onClick={openLoginModal}>
                <span>Log In</span>
              </BtnLogIn>
              <BtnRegistartion onClick={openRegisterModal}>
                <span>Registration</span>
              </BtnRegistartion>
            </BtnBar>
          )}

          <AuthModal
            id="log"
            isOpen={isLoginModalOpen}
            onRequestClose={closeLoginModal}
          >
            <Login onRequestClose={closeLoginModal} />
          </AuthModal>

          <AuthModal
            id="reg"
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          >
            <SignUp onRequestClose={closeRegisterModal} />
          </AuthModal>
        </div>
      </Navigation>
    </HeaderBox>
  );
};
