import { Icone, NavBarDiv, NavComponentes, Texto } from "./NavBarStyle";
import HomeIcon from "../../assets/HomeIcon.png"
import ChatIcon from "../../assets/Chat.png"
import NotIcon from "../../assets/Notificacao.png";
import PerfilIcon from "../../assets/PerfilIcon.png";
import { Link } from "react-router-dom";
export default function NavBar (){
    return (
        <NavBarDiv>
            
            <NavComponentes>
                    <Link to ="/home">
                    <Icone src={HomeIcon} alt="Home Icon"/>
                    </Link>
                    <Texto>Home</Texto>
                
            </NavComponentes>
            <NavComponentes>
                <Icone src={ChatIcon} alt="Chat Icon"/>
                <Texto>Chat</Texto>
            </NavComponentes>
            <NavComponentes>
                <Icone src={NotIcon} alt="Notificação Icon"/>
                <Texto>Avisos</Texto>
            </NavComponentes>
            <NavComponentes>
                <Icone src={PerfilIcon} alt="Perfil Icon"/>
                <Texto>Perfil</Texto>
            </NavComponentes>
        </NavBarDiv>
    )
}