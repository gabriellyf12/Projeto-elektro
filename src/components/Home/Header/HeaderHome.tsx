import { Header, InputBox, Input} from "./HeaderHStyle"
import { Link } from "react-router-dom";
export default function HeaderHome () {
    return (
        <Header>
            <Link to= "/menu">
            <img src={require("../../../assets/menu.png")} alt="menu icon" />
            </Link>
            <InputBox>
                <img src={require("../../../assets/pesquisa.png")} alt="pesquisa icon" />
                <Input placeholder="Encontrar na Elektro" ></Input>
            </InputBox>
            <img src={require("../../../assets/carrinho.png")} alt="carrinho icon"/>
        </Header>
    );
}