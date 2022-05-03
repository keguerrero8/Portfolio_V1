import styled from "styled-components";
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {FaPython} from "react-icons/fa"
import {DiRuby} from "react-icons/di"
import {SiRubyonrails} from "react-icons/si"
import {DiGit} from "react-icons/di"

export const SkillsContainer = styled.div`
    width: 100%;
    /* border: solid 5px green; */
    height: 100vh;
    padding: 10px 80px;
`


export const SkillsTitle = styled.div`
    color: #6df7cc;
    width: 100%;
    font-size: 2rem;
    margin: 30px 0;;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`

export const SkillsContent = styled.p`
    font-size: 1.2rem;
    color: #c3d0db;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const SkillsSubText = styled.p`
    font-size: 1.2rem;
    color: #c3d0db;
    text-align: center;
`

export const Icon = styled.div`
    font-size: 6rem;
    /* cursor: pointer; */
    outline: none;
    text-align: center;
`

export const HTMLIcon = styled(AiFillHtml5)`
    color: #6df7cc;
`
export const CSSIcon = styled(DiCss3)`
    color: #6df7cc;
`
export const JSIcon = styled(SiJavascript)`
    color: #6df7cc;
`
export const ReactIcon = styled(FaReact)`
    color: #6df7cc;
`
export const PyIcon = styled(FaPython)`
    color: #6df7cc;
`
export const RubyIcon = styled(DiRuby)`
    color: #6df7cc;
`
export const RailsIcon = styled(SiRubyonrails)`
    color: #6df7cc;
`
export const GitIcon = styled(DiGit)`
    color: #6df7cc;
`

