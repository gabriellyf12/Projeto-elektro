import { Botoes, ErroDiv, ErroTexto, ErroTitulo, ImagemErro, TextoImg } from "./ErroStyle";
import NavBar from "../../components/NavBar/NavBar";
import Botao from "../../components/Botão/BotaoPreto/Botao";
import BotaoBranco from "../../components/Botão/BotaoBranco/BotaoBranco";
import ErroImagem from "../../assets/Error.png"
import { Link } from "react-router-dom";

export default function Erro (){
    return (

        <ErroDiv>
            <TextoImg> 
                <ErroTitulo>Opsss...</ErroTitulo>
                <ImagemErro src={ErroImagem}/>
                <ErroTexto>Infelizmente, parece que você ainda não está logado.</ErroTexto>
            </TextoImg>
            <Botoes>
            <Link to ="/cadastro">
                <Botao nome={'Cadastrar'}/>
            </Link>
            <Link to ="/login">
                <BotaoBranco nome={'Fazer login'}/>
            </Link>
            </Botoes>
            
            <NavBar/>
        </ErroDiv>
    )
}