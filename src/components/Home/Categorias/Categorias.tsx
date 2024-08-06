import { CategoriasDiv,Categoria, FotoCategoria } from "./CategoriasStyle";
type Props = {
    foto: string;
    nome: string;
}

export default function Categorias ({foto, nome}: Props){
    return(
        <CategoriasDiv>
            <FotoCategoria src={foto}/>
            <Categoria>{nome}</Categoria>
        </CategoriasDiv>
    )
}