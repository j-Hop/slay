import { theme } from "../components/theme";
import styled from "styled-components";
import { NanniesRender } from "../components/Nannies/NanniesRender";

export const PageWrapper = styled.div`
min-height:100vh;
background-color:${theme.colors.light};
`;

export default function NanniesPage(){
    return(
        <PageWrapper>
            <NanniesRender/>
        </PageWrapper>
    );
}