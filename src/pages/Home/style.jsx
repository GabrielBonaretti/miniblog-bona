// styled component
import styled from "styled-components";

// react router component
import { Link } from "react-router-dom";

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SearchForm = styled.form`
    max-width: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
`

export const SearchInput = styled.input`
    margin-right: 50%;
    margin-right: 10px;
`

export const NoPost = styled.div`
    text-align: center;
`

export const NoPostText = styled.p`
    margin-bottom: 1.5em;
`