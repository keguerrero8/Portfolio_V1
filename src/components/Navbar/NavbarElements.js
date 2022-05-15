import styled from "styled-components"
import { Link } from "react-scroll"

export const Nav = styled.nav`
    /* background: #0c2233; */
    background-color: #1b1b1c;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 1.1rem;
    /* position: sticky; */
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 12px;
    /* max-width: 1100px; */
`

export const NavLogo = styled(Link)`
    color: #6df7cc;
    cursor: pointer;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #6df7cc;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #c3d0db;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #6df7cc;
    }

    &:hover {
        color: #6df7cc;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: None;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 10px;
    /* background: #0c2233; */
    background: #1b1b1c;
    white-space: nowrap;
    padding: 10px 22px;
    color: #c3d0db;
    font-size: 1.1rem;
    /* outline: none; */
    border: solid 1px #6df7cc;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #155e48;
    }
`