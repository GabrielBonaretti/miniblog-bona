// styled component
import styled from "styled-components";


export const PostContainer = styled.div`
    text-align: center;
`

export const H3Styled = styled.h3`
    margin-bottom: .2em;
`

export const Tags = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const TagsText = styled.p`
    margin-right: 1em;
`

export const TagsSpan = styled.span`
    font-weight: bold;
`

export const ImageStyled = styled.img`
    max-width: 80%;
`