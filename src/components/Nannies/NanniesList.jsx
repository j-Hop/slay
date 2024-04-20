import { NanniesCard } from './NanniesCard/NanniesCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNannyFiltered } from '../../redux/selectors';
import { fetchData } from '../../redux/operations';

export const NannyList = ({ renderCard }) => {
  const dispatch = useDispatch();
  const filteredNannies = useSelector(getNannyFiltered);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul>
      {filteredNannies.slice(0, renderCard).map((nanni) => (
        <li key={nanni.id}>
          <NanniesCard card={nanni} />
        </li>
      ))}
    </ul>
  );
};
