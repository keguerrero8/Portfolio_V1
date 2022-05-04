import styled from "styled-components";

export const ProjectContainer = styled.div` 
    /* border: solid 5px red; */
    display: flex;
    align-items: center;
    /* padding: 10px 40px; */

    /* @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        padding: 10px 20px;
    } */
`

export const ProjectImageContainer = styled.div` 
    /* border: solid 5px red; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
`

export const ProjectImageWrapper = styled.div` 
    border-radius: 10px;
    overflow: hidden;
    width: 80%;
    height: 30vh;
`

export const ProjectImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const ProjectContent = styled.div` 
    flex: 1;
    /* border: solid 5px yellow; */
`

export const ProjectTitle = styled.h1`
    color: #6df7cc;
    text-align: center;
    font-size: 1.7rem;

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`

export const ProjectDescription = styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
    color: #c3d0db;
    /* margin: 20px 0px; */

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.3;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.9rem;
    }
`