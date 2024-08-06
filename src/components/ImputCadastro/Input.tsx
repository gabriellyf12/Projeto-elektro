import { Divisor, InputBox, InputDiv, Label,  } from "./InputStyle";
type Props = {
    nome: string;
    placeholder: string;
}

export default function Input ({nome,placeholder}: Props) {
    return (

        <InputDiv>

        <Label>{nome}</Label>
        <InputBox placeholder={placeholder}></InputBox>
        <Divisor></Divisor>
        </InputDiv>
    )
}