import styled from "styled-components";

export const ProjectsContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProjectsTitle = styled.h1`
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

export const ProjectsContent = styled.p`
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
export const SideProjectsContent = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: #c3d0db;
    margin: 120px 0px 40px 0px;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin: 100px 0px 30px 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin: 80px 0px 20px 0px;
    }
`

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SideProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 60px auto;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`