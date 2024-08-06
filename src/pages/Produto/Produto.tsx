import { Avaliacao, Caracteristica, Caracteristicas, CaracTexto, Estrelas, ImagensProd, ImgProdutoDiv, LikeCarrinho, NomePrecoAval, ParteInferior, PrecoNome, ProdutoFoto, ProdutoNome, ProdutoPag, ProdutoPreco, Vendedor, VendedorNome } from "./ProdutoStyle";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Botao from "../../components/Botão/BotaoPreto/Botao";
import Icones from "../../assets/Icones.png"
import Celular from "../../assets/Smartphone.png"
import ImgVendedor from "../../assets/Vendedor.png"
import Estrelinhas from "../../assets/Estrelinhas.png"
import { Link } from "react-router-dom";

export default function ProdutoPage () {

    return (
        <ProdutoPag>
            <Header nome={'Produto'}/>
            <ImgProdutoDiv>
                <ImagensProd>
                    <ProdutoFoto src={Celular}/> 
                    <LikeCarrinho src={Icones}/>
                </ImagensProd>

                <NomePrecoAval>
                    <PrecoNome>
                        <ProdutoNome>Celular</ProdutoNome>
                        <ProdutoPreco>R$800,00</ProdutoPreco>
                    </PrecoNome>

                    <Avaliacao>
                        <Vendedor src={ImgVendedor}/>
                        <VendedorNome>João Ribeiro</VendedorNome>
                        <Estrelas src={Estrelinhas}/>
                    </Avaliacao>

                </NomePrecoAval>
            </ImgProdutoDiv>
            

            <ParteInferior>
            <CaracTexto> Características do Produto </CaracTexto>

            <Caracteristicas>
            <Caracteristica>• Tela Super Retina XDR de 6,1”;</Caracteristica>
            <Caracteristica>• Chip biônico A15 p/ desempenho + rápido;</Caracteristica>
            <Caracteristica>• Sistema avançado de câmera dupla;</Caracteristica>
            <Caracteristica>• Câmera frontal TrueDepth de 12 MP, com modo noturno e gravação 4K Dolby Vision.</Caracteristica>
            </Caracteristicas>

            <Link to="/erro">
                <Botao nome={'Comprar'}/>
            </Link>
            
            </ParteInferior>
            <NavBar/>
        </ProdutoPag>
    )
}