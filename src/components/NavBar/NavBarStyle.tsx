import styled from "styled-components"


export const NavBarDiv = styled.div `
    background-color: #2b2b2b;
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    padding: 1%;
    align-items: center;
`

export const NavComponentes = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const Texto = styled.p `
    color: white;
    font-family: "MontSerrat";
    size: 14px;
    line-height: 14.07px;
    font-weight: 400;
    margin-top: 5px;
`
export const Icone = styled.img `
    width: 24px;
    height: 24px;
`