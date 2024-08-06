import { HomeDiv, TituloHome, LogoHome, TituloTexto, Divisor, Subtitulo, CategoriasHome, CategoriasCima, CategoriasBaixo, Produtos, Footer, LogosFooter, } from "./HomeStyle"
import HeaderHome from "../../components/Home/Header/HeaderHome"
import NavBar from "../../components/NavBar/NavBar"
import Categorias from "../../components/Home/Categorias/Categorias"
import Celular from "../../assets/Celulares.png"
import Notebooks from "../../assets/Notebooks.png"
import Tablets from "../../assets/Tablets.png"
import Perifericos from "../../assets/Periféricos.png"
import TVs from "../../assets/TVs.png"
import Acessorios from "../../assets/Acessorios.png"
import Pcs from "../../assets/PCs.png"
import Smartwatches from "../../assets/Smartwatches.png"
import Produto from "../../components/Produto/Produto"
import Smartphone from "../../assets/Smartphone.png"
import Capinha from "../../assets/Capinha.png";
import SmartTV from "../../assets/SmartTV.png";
import Monitor from "../../assets/Monitor.png";
import Iphone from "../../assets/Iphone.png"
import Smartwatch from "../../assets/Smartwatch.png"
import Logos from "../../assets/Logos.png"
import Carrossel from "../../components/Home/Carrossel/Carrossel"
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <HomeDiv>
            <HeaderHome/>

            <TituloHome>
                <LogoHome src={require("../../assets/logo.png")} alt="logo elektro"></LogoHome>
                <TituloTexto>Bem-vindo à Elektro!</TituloTexto>
            </TituloHome>
            <Carrossel/>
            <Divisor></Divisor>
            <Subtitulo>Categorias Elektro</Subtitulo>
            
            <CategoriasHome>
                <CategoriasCima>
                    <Categorias foto={Celular} nome={'Celulares'}/>
                    <Categorias foto={Notebooks} nome={'Notebooks'}/>
                    <Categorias foto={Tablets} nome={'Tablets'}/>
                    <Categorias foto={Perifericos} nome={'Periféricos'}/>            
                </CategoriasCima>

                <CategoriasBaixo>
                    <Categorias foto={TVs} nome={'TVs'}/>
                    <Categorias foto={Acessorios} nome={'Acessórios'}/>
                    <Categorias foto={Pcs} nome={'PCs'}/>
                    <Categorias foto={Smartwatches} nome={'Smartwatches'}/>            
                    </CategoriasBaixo>     
                </CategoriasHome>

            <Subtitulo>Para você</Subtitulo>
            <Divisor></Divisor>

            <Produtos>
                <Produto foto={Smartphone} nome={'Celular'} preco={'R$ 800,00'}/>
                <Produto foto={Capinha} nome={'Capinha'} preco={'R$ 20,00'}/>
            </Produtos>

            <Subtitulo>Produtos em destaque</Subtitulo>
            <Divisor></Divisor>

            <Produtos>
                <Produto foto={SmartTV} nome={'SmartTV'} preco={'R$ 1400,00'}/>
                <Produto foto={Monitor} nome={'Monitor'} preco={'R$ 750,00'}/>
            </Produtos>

            <Subtitulo>Mais vendidos</Subtitulo>
            <Divisor></Divisor>

            <Produtos>
                <Produto foto={Iphone} nome={'Smartphone'} preco={'R$3.200,00'}/>
                <Produto foto={Smartwatch} nome={'Smartwatch'} preco={'R$ 900,00'}/>
            </Produtos>

            <Footer>
                <p>Siga-nos nas redes sociais!</p>
                <LogosFooter src={Logos}/>
            </Footer>

            <NavBar/>
        </HomeDiv>
    )
};