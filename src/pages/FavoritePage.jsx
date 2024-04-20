import NotFavorite from '../images/Not-favorite.png';
import { selectFavorites } from '../redux/selectors';
import { Favorite } from '../components/Favorite';
import { useSelector } from 'react-redux';

export default function FavoritePage(){
    const favorites = useSelector(selectFavorites);
    return(
<>
{favorites.length > 0?
(<Favorite/> ):( <img src={NotFavorite} alt='no favorites'/>)}
</>
    );
}