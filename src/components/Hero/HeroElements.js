import styled from "styled-components";

export const HeroContainer = styled.div`
    /* background: #0c2233; */
    /* background: #1b1b1c; */
    min-height: 100vh;
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: auto;
    @media screen and (max-width: 768px) {
        height: 800px;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 10px;
    top: 45%;
    left: 10%;
    transform: translate(0, -50%);

    @media screen and (max-width: 768px) {
        left: 10%;
        top: 40%;
        transform: translate(0, -40%);
        padding: 20px;
    }

    @media screen and (max-width: 480px) {
        left: 5%;
        top: 30%;
        transform: translate(0, -30%);
    }
`

export const HeroText = styled.div`
    color: ${({isHello}) => (isHello ? "#6df7cc" : "#c3d0db")};
    font-size: 1.3rem;
    align-self: start;
    width: 90%;
    line-height: 1.5;
    opacity: 1;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        width: 90%;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        width: 100%;
    }
`

export const HeroTitle = styled.h1`
    margin: 24px 0;
    color: #c3d0db;
    font-size: 4rem;
    font-weight: 600;
    align-self: start;
    opacity: 1;
    font-family: "Source Code Pro", monospace;

    @media screen and (min-width: 768px) {
        position: relative;
        width: max-content;

        &::before {
            background: #1b1b1c;
            animation: typewriter 3s steps(23) 1s forwards;
        }

        &::after {
            width: 0.125em;
            background: #c3d0db;
            animation: typewriter 3s steps(23) 1s forwards,
                blink 500ms steps(23) infinite;
        }

        &::before,
        &::after {
            content: " ";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        @keyframes blink {
            to {
                background: transparent;
            }
        }

        @keyframes typewriter {
            to {
                left: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 3.3rem;
        margin: 18px 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.3rem;
        margin: 12px 0;
    }
`

export const ResumeBtn = styled.nav`
    margin-top: 50px;
`

export const ResumeBtnLink = styled.a`
    border-radius: 10px;
    background: #1b1b1c;
    white-space: nowrap;
    padding: 10px 22px;
    color: #c3d0db;
    font-size: 1.1rem;
    border: solid 1px #6df7cc;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #155e48;
    }
`