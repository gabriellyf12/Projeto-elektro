import HeaderCL from "../../components/HeaderCadastroLogin/HeaderCL";
import { BotaoCadastro, CadastroDiv, FaceGoogle, LogoSocial, Ou, Tracinho, TracinhoOu } from "./CadastroStyle";
import Face from "../../assets/Face.png"
import Google from "../../assets/Google.png"
import Input from "../../components/ImputCadastro/Input";
import Botao from "../../components/Botão/BotaoPreto/Botao";
import { Link } from "react-router-dom";

export default function Cadastro () {

    return (

        <CadastroDiv>
            <HeaderCL nome={'Cadastrar-se'}/>

            <FaceGoogle>
                <LogoSocial src={Face} alt="Login FaceBook"/>
                <LogoSocial src={Google} alt="Login Google"/>
            </FaceGoogle>
            
            <TracinhoOu>
                <Tracinho></Tracinho>
                <Ou>ou</Ou>
                <Tracinho></Tracinho>
            </TracinhoOu>

            <Input nome={'Nome'} placeholder={"Digite seu nome completo"}/>
            <Input nome={'CPF'} placeholder={"Digite seu CPF"}/>
            <Input nome={'Telefone'} placeholder={"Digite seu telefone"}/>
            <Input nome={'E-mail'} placeholder={"Digite seu e-mail"}/>
            <Input nome={'Senha'} placeholder={"Digite sua senha"}/>
            <Input nome={'Confirme sua senha'} placeholder={"Confirme sua senha"}/>
            
            <Link to ="/home">
                <BotaoCadastro>
                    <Botao nome={"Cadastrar-se!"}/>
                </BotaoCadastro>
            </Link>

            
        </CadastroDiv>
    )
}
