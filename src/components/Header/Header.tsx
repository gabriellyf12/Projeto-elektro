import { HeaderDiv, TituloHeader } from "./HeaderStyle";
import PerfilP from "../../assets/PerfilP.png";
import Menu from "../../assets/MenuP.png"
import { Link } from "react-router-dom";

type Props = {
    nome: string;
}

export default function Header ({nome}: Props) {

    return (
        <HeaderDiv>
            <Link to="/menu">
                <img src={Menu} alt="menu icon" />
            </Link>
            <TituloHeader>
                {nome}
            </TituloHeader>
            <img src={PerfilP} alt="Perfil icon"/>
        
        </HeaderDiv>

    )
}