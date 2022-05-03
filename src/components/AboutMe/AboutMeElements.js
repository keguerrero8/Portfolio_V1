import styled from "styled-components";

export const AboutMeContainer = styled.div` 
    /* border: solid 5px red; */
    height: 100vh;
    max-width: 1200px;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 40px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 10px 20px;
    }
`

export const AboutMePicContainer = styled.div` 
    /* border: solid 5px red; */
    flex: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    @media screen and (max-width: 768px) {
        flex: 1;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const AboutMeImgBg = styled.div`
    position: absolute;
    top: 25%;
    right: 0%;
    width: 80%;
    height: 40vh;
    border-radius: 30px;
    border: solid 5px #6df7cc;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const AboutMeImgContainer = styled.div`
    width: 80%;
    height: 40vh;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
`

export const AboutMeImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`


export const AboutMeContent = styled.div` 
    flex: 1.2;
    /* border: solid 5px yellow; */

    @media screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`

export const AboutMeTitle = styled.h1`
    color: #6df7cc;
    text-align: center;
    font-size: 2rem;
    font-weight: solid;
    /* border: solid 5px yellow; */

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin: 30px 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
        margin: 20px 0px;
    }
`

export const AboutMetext = styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
    color: #c3d0db;
    margin: 20px 0px;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.3;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`
