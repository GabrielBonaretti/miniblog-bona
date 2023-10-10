// styled-components
import styled from "styled-components";

export const FooterStyled = styled.footer`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #edf3f6;

    @media (max-width: 400px) {
        font-size: .8em;
    }
`