import styled from "styled-components";

export const ProdutoDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    width: 40%;
    box-shadow: 0px 2px 8px #929292;
    border-radius: 15px;
    gap: 10px;
    margin-left: 25px;
    margin-top: 3vh;
`

export const NomeProduto = styled.div `
    font-family: 'MontSerrat';
    font-weight: 400;
    line-height: 16.14px;
`

export const PrecoProduto = styled.div `
    font-family: 'MontSerrat';
    font-weight: 700;
    line-height: 16.14px;    
`

export const ImagemProduto = styled.img `
    width: 136px;
    height: 126px;
`

export const Curtir = styled.img `
    justify-content: center;
    width: 24px;
    height: 24px
`
export const Inferior = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin: 10px;
`

export const NomePreco = styled.div `
    display: flex;
    flex-direction: column;

`