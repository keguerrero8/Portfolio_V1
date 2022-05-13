import styled from "styled-components";
import {AiFillPhone} from "react-icons/ai"
import {FaMapMarkerAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

export const ContactContainer = styled.div`
    height: 100vh;
    background-color: #1b1b1c;
    /* background-color: #0c2233; */
    margin-top: 100px;
    max-width: 1200px;
    margin: auto;
`

export const ContactTitle = styled.h1`
    color: #6df7cc;
    font-size: 3rem;
    font-weight: solid;
    text-align: center;
    
`

export const ContactWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 30px;
`

export const ContactLeft = styled.div`
    flex: 0.7;
    /* border: solid green 5px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ContactRight = styled.div`
    flex: 1.3;
    border: solid yellow 5px;
`

export const ContactInfo = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ContactSocialMediaLink = styled.a`
    font-size: 2.5rem;
    cursor: pointer;
    outline: none;
`

export const ContactSocialMedia = styled.div`
    width: 60%;
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
`

export const ContactInfoWrapper = styled.div`
    font-size: 1.5rem;
    color: #c3d0db;
    display: flex;
    align-items: center;
`

export const PhoneIcon = styled(AiFillPhone)`
    color: #6df7cc;
    margin-right: 10px;
`

export const MapIcon = styled(FaMapMarkerAlt)`
    color: #6df7cc;
    margin-right: 10px;
`

export const MailIcon = styled(AiOutlineMail)`
    color: #6df7cc;
    margin-right: 10px;
`

export const LinkedInIcon = styled(AiFillLinkedin)`
    color: #6df7cc;
`

export const GithubIcon = styled(AiFillGithub)`
    color: #6df7cc;
`