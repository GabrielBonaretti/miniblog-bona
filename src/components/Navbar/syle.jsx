// styled components
import styled from "styled-components";

// react router
import { NavLink } from "react-router-dom"


export const NavbarStyled = styled.nav`
    display: flex;
    box-shadow: rgba(0,0,0, .15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: .5em 2em;
`

export const Brand = styled(NavLink)`
    font-size: 1.2em;
`

export const BrandSpan = styled.span`
    font-weight: 900;
    text-transform: uppercase;
`

export const LinksList = styled.ul`
    display: flex;
    list-style: none;
`

export const LinkStyled = styled(NavLink)`

    padding: .4em .6em;
    &.active {
        background-color: #000;
        color: #fff;
    }
`

