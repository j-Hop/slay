import { ModalTime } from "./NanniesModal.styled";

export const Time = ({isOpen, onRequestClose}) => {
return(
<ModalTime isOpen={isOpen} onRequestClose={onRequestClose}>
<h2>Meeting time</h2>
<p>9:00</p>
<p>9:30</p>
<p>10:00</p>
<p>10:30</p>
</ModalTime>    
);
};
