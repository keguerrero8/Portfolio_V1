import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineLink} from "react-icons/ai"
import {FiVideo} from "react-icons/fi"

export const ProjectContainer = styled.div` 
    /* border: solid 5px yellow; */
    display: flex;
    align-items: center;
    margin: 10px 0px 30px;
    width: 100%;
`

export const ProjectImageContainer = styled.div` 
    /* border: solid 5px red; */
    flex: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    @media screen and (max-width: 768px) {
        flex: 1;
    }
`

export const ProjectImageWrapper = styled.div` 
    border: 2px solid #bdbdbd;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    width: 90%;
    height: 350px;

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 100%;
        overflow: scroll;;
    }

    @media screen and (max-width: 280px) {
        height: 500px;
    }
`

export const ProjectOverlay = styled.div`

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 350px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: rgba(0,0,0,0.9);
        /* background-color: rgba(12, 34, 51, 0.9); */
        border-radius: 10px 10px 0px 0px;
    }

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 100%;
        overflow: scroll;;
    }

    @media screen and (max-width: 280px) {
        height: 500px;
    }
`

export const ProjectOverlayTitle = styled.h1`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: #6df7cc;
        text-align: center;
        font-size: 1.5rem;
        margin: 30px 0px 20px 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        margin: 30px 0px 10px 0px;
    }

    @media screen and (max-width: 330px) {
        margin: 20px 0px 10px 0px;
    }
`

export const ProjectOverlayDescription = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: white;
        text-align: center;
        font-size: 1rem;
        padding: 0px 20px;
        line-height: 1.4;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 1.3;
    }
`

export const ProjectOverlayTechnologies = styled.div`
    display: none;
    /* height: 40px; */

    @media screen and (max-width: 768px) {
        display: block;
        margin-top: 20px;
        padding: 0px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        justify-content: center;
        gap: 0.7rem;
    }
`

export const OverlayTechnology = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 0.8rem;
        color: #6df7cc;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`

export const ProjectOverlayLinkWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        margin: 30px auto;
        width: 90%;
        display: flex;
        justify-content: space-around;
    }
`

export const ProjectOverlayLink = styled.a`

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        cursor: pointer;
        outline: none;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`

export const ProjectBrowser = styled.div` 
    height: 20px;
    background-color: #bdbdbd;
    display: flex;
    align-items: center;
`

export const ProjectCircle = styled.div` 
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 3px;
    background-color: white;
`

export const ProjectImg = styled.img`
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
`

export const ProjectContent = styled.div` 
    flex: 1.1;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: solid 5px orange; */

    @media screen and (max-width: 768px) {
        display: none;
        /* flex: 0; */
    }
`   
export const ProjectContentWrapper = styled.div`
    padding: 10px;
    background: #102e45;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
`

export const ProjectTitle = styled.h1`
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

export const ProjectDescription = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    color: #c3d0db;
`

export const ProjectTechnologies = styled.div`
    margin-top: 20px;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
`

export const Technology = styled.div`
    font-size: 0.8rem;
    color: #c3d0db;
`

export const ProjectLinkWrapper = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    width: 80%;
`

export const ProjectLink = styled.a`
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const GithubIcon = styled(AiFillGithub)`
    color: #6df7cc;
`

export const LinkIcon = styled(AiOutlineLink)`
    color: #6df7cc;
`

export const VideoIcon = styled(FiVideo)`
    color: #6df7cc;
`