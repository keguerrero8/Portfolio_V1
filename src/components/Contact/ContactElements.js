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

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5em;
    }
    
`

export const ContactWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ContactLeft = styled.div`
    flex: 0.7;
    /* border: solid green 5px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ContactRight = styled.div`
    flex: 1.3;
    /* border: solid yellow 5px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const ContactText = styled.div`
    color: white;
    width: 90%;
    line-height: 1.5;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }

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

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    &:hover {
        transform: scale(1.5);
    }
`
 
export const ContactSocialMedia = styled.div`
    width: 60%;
    margin: 30px auto;
    display: ${props => props.primary ? "flex" : "none"};
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
`

export const ContactInfoWrapper = styled.div`
    font-size: 1.5rem;
    color: #c3d0db;
    display: ${props => props.primary ? "flex" : "none"};
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        font-size: 1rem;
    }
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

export const FormContainer = styled.form`
    /* border: solid blue 5px; */
    width: 90%;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const InputSmall = styled.input`
    width: 50%;
    height: 50px;
    padding: 5px 0px 0px 20px;
    border: none;
    font-size: 1rem;
    background-color: #39393d;
    color: #c3d0db;

    &::placeholder{
        color: #c3d0db;
        transition: color 0.3s ease;
    }

    &:focus{
        outline: none;
        border-bottom: solid #6df7cc 1px;
        transition: border-bottom 0.3s ease;
    }

    &:focus::placeholder{
        color: transparent;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
    }

`


export const InputLarge = styled.input`
    margin-top: 0.5rem;
    width: 100%;
    height: 50px;
    padding: 5px 0px 0px 20px;
    font-size: 1rem;
    background-color: #39393d;
    border: none;
    color: #c3d0db;

    &::placeholder{
        color: #c3d0db;
        transition: color 0.3s ease;
    }

    &:focus{
        outline: none;
        border-bottom: solid #6df7cc 1px;
        transition: border-bottom 0.3s ease;
    }

    &:focus::placeholder{
        color: transparent;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        height: 40px;
    }
`

export const TextArea = styled.textarea`
    margin-top: 0.5rem;
    width: 100%;
    height: 300px;
    padding: 20px;
    font-size: 1rem;
    background-color: #39393d;
    border: none;
    color: #c3d0db;

    &::placeholder{
        color: #c3d0db;
        transition: color 0.3s ease;
    }

    &:focus{
        outline: none;
        border-bottom: solid #6df7cc 1px;
        transition: border-bottom 0.3s ease;
    }

    &:focus::placeholder{
        color: transparent;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const ButtonContainer = styled.div`
    margin: 20px auto;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const SubmitText = styled.p`
    color: #c3d0db;
    margin-right: 20px;
    font-size: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const Button = styled.button`
    width: 30%;
    height: 50px;
    background-color: #1b1b1c;
    border: solid 2px #6df7cc; 
    border-radius: 10px;
    color: #c3d0db;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        height: 40px;
        width: 50%;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #155e48;
    }
`
