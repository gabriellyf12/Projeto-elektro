import { CarrosselDiv, ImgCarrossel } from "./CarrosselStyle";

import FotoCarrossel from "../../../assets/Carrossel.png"

export default function Carrossel(){
    return(

        <CarrosselDiv>            
            <ImgCarrossel src={FotoCarrossel}></ImgCarrossel>
        </CarrosselDiv>


    )
}