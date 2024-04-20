import { useSelector } from "react-redux";
import { selectFilter } from "../redux/selectors";
import { NanniesCard } from "./Nannies/NanniesCard/NanniesCard";

export const Favorite = () => {
const favoriteNanny = useSelector(selectFilter);
return(
<>
{favoriteNanny.map(card => (
    <NanniesCard key={card.id} card={card}/>
))}
</>
);
};