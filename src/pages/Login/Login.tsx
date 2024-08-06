import HeaderCL from "../../components/HeaderCadastroLogin/HeaderCL";
import { EmailSenha, Esqueci, FaceGoogle, Icon, IrCadastro, LoginDiv, LogoImg, LogoSocial, Ou, Input, Texto, Tracinho, TracinhoOu, IconInput, Divisor, BotaoLogin } from "./LoginStyle";
import Logo from "../../assets/logo.png"
import Botao from "../../components/Botão/BotaoPreto/Botao";
import Face from "../../assets/Face.png"
import Google from "../../assets/Google.png"
import Email from "../../assets/Emailicon.png"
import VerSenha from "../../assets/VerSenha.png"
import Cadeado from "../../assets/Cadeado.png"
import { Link } from "react-router-dom";

export default function Login () {

    return (

        <LoginDiv>
            <HeaderCL nome={'Entrar'}/>
            <LogoImg>
                <img src={Logo} alt="Logo Elektro"/>
            </LogoImg> 

            <EmailSenha>
                <IconInput>
                    <Icon src={Email}/>
                    <Input type="email" placeholder="Digite seu e-mail" />
                </IconInput>
                <Divisor></Divisor>
                
                <IconInput>
                    <Icon src={Cadeado}/>
                    <Input type="senha" placeholder="Digite sua senha" />
                    <Icon src={VerSenha}/>
                </IconInput>

                <Divisor></Divisor>

                <Esqueci>{"Esqueci minha senha"}</Esqueci>
            </EmailSenha>

            <Link to="/home">
                <BotaoLogin>
                <Botao nome={"Entrar"}/>
                </BotaoLogin>
            </Link>

            

            <TracinhoOu>
                <Tracinho></Tracinho>
                <Ou>ou</Ou>
                <Tracinho></Tracinho>
            </TracinhoOu>


            <FaceGoogle>
                <LogoSocial src={Face} alt="Login FaceBook"/>
                <LogoSocial src={Google} alt="Login Google"/>
            </FaceGoogle>

            <Link to= "/cadastro">
                <IrCadastro>
                <Texto>Não possui cadastro? Cadastre-se!</Texto> 
                </IrCadastro>
            </Link>

        </LoginDiv>
    )
}