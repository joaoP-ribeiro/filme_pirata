import "./home.css"
import Nav_bar from "../components/Nav_bar.jsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Carta_filme from "../components/Carta_filme.jsx";
import { BiSolidDownArrowAlt } from "react-icons/bi";

const pesquisar_URL_filme = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY


export default function Search(){
    const [resultado_pesquisa] = useSearchParams();

    const [filme, set_filme] = useState([]);
    console.log(filme)
    const nome = resultado_pesquisa.get("nome");

    const pegar_pesquisa_filmes = async(url) => {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_filme(dados.results);
    };

    useEffect(() => {
        const url_pesquisa_filmes = `https://api.themoviedb.org/3/search/movie?api_key=afcbbffeeb2ca974f0343a7559714222&query=${nome}`;
        pegar_pesquisa_filmes(url_pesquisa_filmes)
    }, [nome])


    return(
        <div className="App">
            <Nav_bar/>
           <div className="container_resposta_API">
                <div className="container">
                <h2 className="title_resposta_API">Resultado<div className="seta"><BiSolidDownArrowAlt/></div></h2>
                <div className="container_filmes">
                {filme.length > 0 && filme
                .filter(filme => filme.poster_path !== null).map((filme) => <Carta_filme key={filme.id} filme={filme} />)
                }
                </div>
            </div>
           </div>
        </div>
    )
}