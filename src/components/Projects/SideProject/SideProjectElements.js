import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";

export const SideProjectContainer = styled.div`
    padding: 20px;
    background: #102e45;
    border-radius: 5px 5px 0px 0px;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 80%;
        margin: auto;
    }

    @media screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
    }

    &:hover {
        transform: scale(0.9);
    }
`

export const SideProjectTitle = styled.h1`
    color: #6df7cc;
    text-align: center;
    font-size: 1.5rem;
    margin: 10px 0px;

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`

export const SideProjectDescription = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    color: #c3d0db;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const SideProjectTechnologies = styled.div`
    margin-top: 20px;
    padding: 0px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        gap: 0.7rem;
    }

    @media screen and (max-width: 480px) {
        gap: 0.5rem;
    }
`

export const SideTechnology = styled.div`
    font-size: 1rem;
    color: #6df7cc;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`

export const SideProjectLinkWrapper = styled.div`
    margin: 30px auto 5px auto;
    width: 90%;
    display: flex;
    justify-content: space-around;
`

export const SideProjectLink = styled.a`
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }

    &:hover {
        transform: scale(1.5);
    }
`

export const GithubIcon = styled(AiFillGithub)`
    color: #6df7cc;
`
