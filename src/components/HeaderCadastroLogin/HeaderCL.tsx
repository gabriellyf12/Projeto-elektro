import { HeaderCLDiv, SetaEsquerda, TituloHeaderCL } from "./HeaderCLStyle";
import Seta from "../../assets/Seta.png"
import { Link } from "react-router-dom";

type Props = {
    nome: string;
}

export default function HeaderCL ({nome}:Props) {
    return (

        <HeaderCLDiv>
            <Link to ="/erro">
            <SetaEsquerda src={Seta} alt="seta icon" />
            </Link>
            <TituloHeaderCL>
                {nome}
            </TituloHeaderCL>

        </HeaderCLDiv>
    )
}