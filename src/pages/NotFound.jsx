import styled from "styled-components";
import NotFound from '../images/notFound.jpg';
import { NavLink } from "react-router-dom";
import { theme } from "../components/theme";

const Error = styled.div`
display:flex;
justify-content:center;
transform-style: preserve-3d;
perspective: 400px;
`;

const Msg = styled.h1`
font-size:75px;
position:absolute;
top:60%;
right:30%;
transform:rotateY(30deg);
`;

const BtnBack = styled(NavLink)`
background-color:${theme.colors.red};
color:${theme.colors.light};
font-size:70px;
position:absolute;
top:80%;
right:20%;
transition: background-color ${theme.transition} color ${theme.transition};
transform: rotateY(-90deg);

&:hover{
    background-color:transparent;
    color:${theme.colors.green};
}
`;

export default function NotFoundPage() {
return(
    <Error>
        <img src={NotFound} alt="notFound" />
        <Msg>Not Found Page</Msg>
        <BtnBack to='/nannies'>Go Back</BtnBack>
    </Error>
);
}

