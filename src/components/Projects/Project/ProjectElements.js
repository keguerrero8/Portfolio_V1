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
`

export const ProjectImageWrapper = styled.div` 
    border: 2px solid #bdbdbd;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    width: 90%;
    height: 350px;
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
    /* margin: 20px 0px; */

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.3;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }
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