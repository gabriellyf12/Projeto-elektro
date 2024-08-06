import { InicialDiv, LogoDiv } from "./PagInicialStyle";
import { Titulo } from "./PagInicialStyle";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Inicial: React.FC = () =>{
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

    
    return(
        <InicialDiv>
            <LogoDiv>
                <img src={require("../../assets/logo.png")} alt="logo elektro inicial"/>
                <Titulo>Elektro</Titulo>
            </LogoDiv>
        </InicialDiv>
    )
}

export default Inicial;