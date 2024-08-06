import { BotaoDiv, BotaoTexto } from "./BotaoStyle";
type Props = {
    nome: string;
}


export default function Botao ({nome}: Props) {

    return (

        <BotaoDiv>
            <BotaoTexto>{nome}</BotaoTexto>
        </BotaoDiv>
    )
}