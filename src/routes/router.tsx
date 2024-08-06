import {Route, Routes, BrowserRouter, } from "react-router-dom";
import Home from "../pages/Home/Home";
import Inicial from "../pages/Pagina inicial/PagInicial";
import ProdutoPage from "../pages/Produto/Produto";
import Cadastro from "../pages/Cadastro/Cadastro";
import Erro from "../pages/Erro no menu/Erro";
import Login from "../pages/Login/Login";
import Menu from "../components/Menu/Menu";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Inicial/>} path="/" />
                <Route element={<Home/>} path="/home" />
                <Route element={<ProdutoPage/>} path="/produto" />
                <Route element={<Cadastro/>} path="/cadastro" />
                <Route element={<Login/>} path="/login" />
                <Route element={<Erro/>} path="/erro" />
                <Route element={<Menu/>} path="/menu" />

            </Routes>        
        </BrowserRouter>
    )
}