import toast from 'react-hot-toast';
import SpriteIcon from '../../../images/sprite.svg';
import { NanniesModal } from '../NanniesModal/NanniesModal';
import {
  MainCardContainer,
  GreenDot,
  ContAvatar,
  CardBody,
  IconMap,
  IconStar,
  GreenPrice,
  HeaderCard,
  HeartBtn,
  SubParagraph,
  VerticalLine,
  CardWrapper,
  CardMain,
  UnderLine,
  InfoLine,
  MainList,
  BtnReadMore,
  BtnMake,
  HiddenData,
} from './NanniesCard.styled';
import { NanniesReviewer } from './NanniesReviewer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../redux/selectors';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addFavorites, removeFavorites } from '../../../redux/favoriteSlice';
import { AuthModal } from '../../Auth/AuthModal/AuthModal';

export const NanniesCard = ({ card }) => {
  const [isNanniesModalOpen, setNanniesModalOpen] = useState(false);
  const [isClicked, setClicked] = useState(null);
  const [isHidden, setHidden] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const favorites = useSelector(selectFavorites);
  const isFavorites = favorites?.some(
    (favorite) => favorite.rating === card.rating
  );
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (!authUser) {
      toast.error('You don`t authorized!', {
        duration: 5000,
        position: 'top-right',
      });
      return;
    }

    isFavorites && authUser
      ? dispatch(removeFavorites(card.id))
      : dispatch(addFavorites(card));
  };

  const openNanniesModal = () => {
    setNanniesModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNanniesModal = () => {
    setNanniesModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleClick = () => {
    setClicked(true);
    setHidden(true);
  };

  const {
    location,
    name,
    rating,
    price_per_hour,
    reviews,
    education,
    characters,
    birthday,
    kids_age,
    experience,
    about,
  } = card;

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => listen();
  }, []);

  return (
    <MainCardContainer>
      <ContAvatar>
        <GreenDot>
          <svg width="14" height="14">
            <use xlinkHref={`${SpriteIcon}#icon-online`} />
          </svg>
        </GreenDot>
      </ContAvatar>

      <CardBody>
        <HeaderCard>
          <SubParagraph>Nanny</SubParagraph>
          <CardWrapper>
            <IconMap width="16" height="16">
              <use xlinkHref={`${SpriteIcon}#icon-map-pin`} />
            </IconMap>
            <p>{location}</p>
            <VerticalLine>|</VerticalLine>
            {''}
            <IconStar width="16" height="16"></IconStar>
            <p>Rating:{rating}</p>
            <VerticalLine>|</VerticalLine>
            {''}
            <p>Price / 1 hour:</p>
            <GreenPrice>{price_per_hour}$</GreenPrice>
            <HeartBtn onClick={toggleFavorite}>
              {isFavorites && authUser ? (
                <svg width="26" height="26" stroke="##103931" fill="#103931">
                  <use xlinkHref={`${SpriteIcon}#icon-heart`} />
                </svg>
              ) : (
                <svg width="26" height="26" stroke="#121417" fill="transparent">
                  <use xlinkHref={`${SpriteIcon}#icon-heart`} />
                </svg>
              )}
            </HeartBtn>
          </CardWrapper>
        </HeaderCard>

        <CardMain>
          <h2>{name}</h2>
          <MainList>
            <li>
              <InfoLine>Age:</InfoLine>
              {''}
              <UnderLine>{birthday}</UnderLine>
            </li>
            <li>
              <InfoLine>Experience:</InfoLine>
              {experience}
            </li>
            <li>
              <InfoLine>Kids age:</InfoLine>
              {kids_age}
            </li>
            <li>
              <InfoLine>Characters:</InfoLine>
              {characters}
            </li>
            <li>
              <InfoLine>Education:</InfoLine>
              {education}
            </li>
          </MainList>
          <p>{about}</p>
        </CardMain>

        {!isHidden && (
          <BtnReadMore onClick={handleClick}>Read More</BtnReadMore>
        )}

        {!isClicked && (
          <HiddenData>
            {reviews.map((item, idx) => (
              <NanniesReviewer key={idx} item={item} />
            ))}
            <BtnMake onClick={openNanniesModal}>Make an appointment</BtnMake>
            <AuthModal
              isOpen={isNanniesModalOpen}
              onRequestClose={closeNanniesModal}
            >
              <NanniesModal card={card} onClick={closeNanniesModal} />
            </AuthModal>
          </HiddenData>
        )}
      </CardBody>
    </MainCardContainer>
  );
};
