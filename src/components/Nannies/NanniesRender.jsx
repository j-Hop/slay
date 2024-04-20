import { Filter } from '../Filters/Filter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NannyList } from './NanniesList';
import { getNannyFiltered, selectLoading } from '../../redux/selectors';
import { Loader } from '../Loader';
import {
  BtnLoadMore,
  InfoText,
  BtnWrapper,
  Wrapper,
} from './NanniesCard/NanniesCard.styled';

export const NanniesRender = () => {
  const [renderCard, setRenderCard] = useState(4);
  const filteredNannies = useSelector(getNannyFiltered);
  const isLoading = useSelector(selectLoading);

  const handleLoadMore = () => {
    setRenderCard((prevState) => prevState + 4);
  };

  return (
    <>
      <Wrapper>
        <Filter />
      </Wrapper>
      {isLoading && <Loader />}
      {!isLoading && filteredNannies.length === 0 && (
        <InfoText>No teachers found based on the selected filters 😕</InfoText>
      )}
      <NannyList renderCard={renderCard} />
      {renderCard < filteredNannies.length && (
        <BtnWrapper>
          <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
        </BtnWrapper>
      )}
    </>
  );
};
