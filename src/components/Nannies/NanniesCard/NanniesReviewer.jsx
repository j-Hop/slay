import SpriteIcon from '../../../images/sprite.svg';
import { RevComment, RevContainer, RevWrapper} from './NanniesCard.styled'

export const NanniesReviewer = ({item}) => {
const { rating, reviewer, comment} = item;

return(
<>
<RevContainer>
    <RevWrapper>
<h3>{reviewer}</h3>
<p>
<svg width='16' height='16'>
    <use xlinkHref={`${SpriteIcon}#icon-star`}/>
</svg>
{rating}.0
</p>
    </RevWrapper>
</RevContainer>
<RevComment>{comment}</RevComment>
</>
);
};