// import SpriteIcon from '../../../images/sprite.svg';
import {RevAvatar, RevComment, RevContainer, RevWrapper} from './NanniesCard.styled'

export const NanniesReviewer = ({item}) => {
const {reviewer_avatar, rating, reviewer, comment} = item;

return(
<>
<RevContainer>
    <RevAvatar src={reviewer_avatar} width='44' height='44' alt='avatar'/>
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