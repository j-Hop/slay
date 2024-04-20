import styled from "styled-components";
import { theme } from "../theme";
import { Field } from "formik";
import SpriteIcon from "../../images/sprite.svg"

export const BtnReset = styled.button`
background-color:${theme.colors.red};
border-radius:${theme.radius.s};
border:none;

&:hover{
    background-color:${theme.colors.green}
}

span{
font-weight:500;
line-height:1.25;
margin: ${theme.spacing(7)} ${theme.spacing(19.5)};
}
`;

export const StyledLabel = styled.label`
display: inline-flex;
flex-direction:column;

color:${theme.colors.light};
font-weight:500;
font-size:18px;
line-height:1.12;
`;

export const StyledSelect = styled(Field)`
padding:${theme.spacing(7)} ${theme.spacing(9)};
cursor:pointer;
font-size:18px;
line-height:1.12;
font-weight:400;
outline:none;
border:none;
border-radius:${theme.radius.s};
overflow:hidden;
appearance: none;
background: right 18px center no-repeat url(${SpriteIcon}#icon-chevron-down);

&#filters{
inline-size:226px;
}

option{
    color:rgba(17, 16, 28, 0.3);
}
`;