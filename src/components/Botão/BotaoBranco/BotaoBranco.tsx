import { BotaoDiv, BotaoTexto } from "./BotaoBrancoStyle";
type Props = {
    nome: string;
}


export default function BotaoBranco ({nome}: Props) {

    return (

        <BotaoDiv>
            <BotaoTexto>{nome}</BotaoTexto>
        </BotaoDiv>
    )
}