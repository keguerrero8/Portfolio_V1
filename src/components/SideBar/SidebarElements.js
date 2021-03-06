import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-scroll"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #1b1b1c;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(AiOutlineClose)`
    color: #6df7cc;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: black;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none:
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #c3d0db; 
    cursor: pointer;

    &:hover {
        color: #6df7cc;
        transition: 0.2s ease-in-out;
    }
`

export const SideBarLogo = styled.div`
    color: #6df7cc;
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-decoration: none;
`
