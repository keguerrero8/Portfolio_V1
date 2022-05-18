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
    max-width: 1200px;
    margin: 30px auto;
    min-height: 100vh;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SkillsTitle = styled.h1`
    color: #6df7cc;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: solid;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`

export const SkillsContent = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: #c3d0db;
    margin: 30px 0 80px 0;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin: 20px 0 50px 0;
    }
`

export const SkillsSubText = styled.p`
    font-size: 1.2rem;
    color: #c3d0db;
    text-align: center;
    margin: 10px 0px 40px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        margin: 2px 0px 30px;
    }

`

export const Icon = styled.div`
    font-size: 5.5rem;
    outline: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const HTMLIcon = styled(AiFillHtml5)`
    color: #f06529;
`
export const CSSIcon = styled(DiCss3)`
    color: #307bf2;
`
export const JSIcon = styled(SiJavascript)`
    color: #ffe354;
`
export const ReactIcon = styled(FaReact)`
    color: #32d4ed;
`
export const PyIcon = styled(FaPython)`
    color: #4B8BBE;
`
export const RubyIcon = styled(DiRuby)`
    color: #b02121;
`
export const RailsIcon = styled(SiRubyonrails)`
    color: #eb2a2a;
`
export const GitIcon = styled(DiGit)`
    color: #F1502F;
`

