// styled components
import styled from "styled-components";

export const PostDetailStyled = styled.div`
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
`
export const PostImage = styled.img`
    max-width: 600px;
    
    @media (max-width: 650px) {
        max-width: 300px;
    }
`

export const PostDetailText = styled.h2`
    margin-bottom: 0.4em;

    @media (max-width: 650px) {
        font-size: 1em;
    }
`
export const TagsDiv = styled.div`
    margin-bottom: 1.2em;
    display: flex;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`

export const Tags = styled.p`
    margin-right: .5em;
`

export const SpanTag = styled.span`
    font-weight: bold;
`

export const CreatedBy = styled.p`
    font-style: italic;
    color: #444;
    font-size: .8em;
    margin-bottom: 0;
`
