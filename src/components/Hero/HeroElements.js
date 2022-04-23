import styled from "styled-components";

//ORIGINAL
// export const HeroContainer = styled.div`
//     background: #0c2233;
//     display: flex;
//     /* justify-content: center; */
//     /* align-items: content; */
//     padding: 0 30px;
//     height: 600px;
//     /* position: relative; */
//     z-index: 1;

//     /* Add before styles */
// `

// export const HeroContent = styled.div`
//     z-index: 3;
//     max-width: 1200px;
//     /* position: absolute; */
//     padding: 8px 12px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 1.5rem;
// `

export const HeroContainer = styled.div`
    background: #0c2233;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: content; */
    /* padding: 0 10px; */
    height: 600px;
    position: relative;
    z-index: 1;
    /* border: solid 5px green; */

    /* Add before styles */
`

export const HeroContent = styled.div`
    z-index: 3;
    /* width: 100%;
    margin: auto; */
    position: absolute;
    padding: 10px;
    top: 50%;
    left: 15%;
    transform: translate(0, -50%);
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem; */

    @media screen and (max-width: 768px) {
        left: 10%;
        top: 40%;
        transform: translate(0, -40%);
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
    width: 80%;
    line-height: 1.5;
    opacity: 0;
    /* text-align: center; */

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        width: 90%;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        width: 100%;
    }
`

export const HeroName = styled.div`
    margin: 24px 0;
    color: #c3d0db;
    font-size: 4.5rem;
    font-weight: 600;
    /* text-align: center; */
    align-self: start;
    opacity: 0;
    /* max-width: 600px; */

    @media screen and (max-width: 768px) {
        font-size: 3.3rem;
        margin: 18px 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.3rem;
        margin: 12px 0;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-ft: cover;
    object-fit: cover;
    background: #0c2233;
`