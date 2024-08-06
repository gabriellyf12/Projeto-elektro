import { Categoria, Divisor, FotoUsuario, HeaderMenu, MenuDiv, Sair, Usuario } from "./MenuStyle";
import FotoUser from "../../assets/FotoUsuario.png"
import { Link } from "react-router-dom";

export default function Menu () {

    return (

        <MenuDiv>
            <HeaderMenu>
                <FotoUsuario src={FotoUser}/>
                <Usuario>Usuário</Usuario>
            </HeaderMenu>
            <Link to="/erro">
                <Categoria>Editar dados</Categoria>
            </Link>
            <Divisor></Divisor>
            <Link to="/erro">
                <Categoria>Meus pedidos</Categoria>
            </Link>
            <Divisor></Divisor>
            <Link to="/erro">
                <Categoria>Meus produtos</Categoria>
            </Link>
            <Divisor></Divisor>
            <Link to="/erro">
                <Categoria>Meu carrinho</Categoria>
            </Link>
            
            <Link to ="/home">
                <Sair>Sair</Sair>
            </Link>
        </MenuDiv>
    )
}