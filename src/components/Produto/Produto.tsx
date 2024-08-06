import { Curtir, ImagemProduto, Inferior, NomePreco, NomeProduto, PrecoProduto, ProdutoDiv  } from "./ProdutoStyle";
import Coracao from "../../assets/Like.png";
import { Link } from "react-router-dom";


type Props = {
    foto: string;
    nome: string;
    preco: string;
}

export default function Produto ({foto, nome, preco}: Props){

    return (
        <ProdutoDiv>
            <Link to = "/produto">
                <ImagemProduto src={foto}/>

                <Inferior>
                
                <NomePreco>
                    <NomeProduto>{nome}</NomeProduto>
                    <PrecoProduto>{preco}</PrecoProduto>
                </NomePreco>

                <Curtir src={Coracao}/>

                </Inferior>
            </Link>
        </ProdutoDiv>

    )
}