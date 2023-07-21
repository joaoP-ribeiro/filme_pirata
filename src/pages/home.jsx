import { useState, useEffect } from "react"
import "./home.css"
import Nav_bar from "../components/Nav_bar.jsx";
import Carta_filme from "../components/Carta_filme.jsx";
import { BiSolidDownArrowAlt } from "react-icons/bi";

function Home(){

    const filme_Url = import.meta.env.VITE_API
    const apikey = import.meta.env.VITE_API_KEY

    const[filmes_populares, set_filmes_populares]= useState([])
    const pegar_filmes_populares = async (url) => {

        const resposta = await fetch(url)
        const dados = await resposta.json();

        set_filmes_populares(dados.results)

    };

    useEffect(() => {
        const url_pesquisa_mfilmes = `${filme_Url}popular?${apikey}&page=1`;
        pegar_filmes_populares(url_pesquisa_mfilmes) 

    }, [])

    const[melhores_filmes, set_melhores_filmes]= useState([])
    const pegar_melhores_filmes = async (url) => {

        const resposta = await fetch(url)
        const dados = await resposta.json();

        set_melhores_filmes(dados.results)

    };

    useEffect(() => {
        const url_pesquisa_mfilmes = `${filme_Url}top_rated?${apikey}&page=1`;
        pegar_melhores_filmes(url_pesquisa_mfilmes) 

    }, [])


    const[filmes_premiados, set_filmes_premiados]= useState([])
    const pegar_filmes_premiados = async (url) => {

        const resposta = await fetch(url)
        const dados = await resposta.json();

        set_filmes_premiados(dados.results)

    };

    useEffect(() => {
        const url_pesquisa_mfilmes = `https://api.themoviedb.org/3/discover/movie?${apikey}&sort_by=vote_average.desc&vote_count.gte=1000&with_original_language=en&with_awards=true&page=1`;
        pegar_filmes_premiados(url_pesquisa_mfilmes) 

    }, [])

    //https://api.themoviedb.org/3/discover/movie?api_key=SUA_CHAVE_DE_API&sort_by=vote_average.desc&vote_count.gte=1000&with_original_language=en&with_awards=true&page=1

    return(
        <div className="App">
            <Nav_bar/>
           <div className="container_resposta_API">
                <div className="container">
                    <h2 className="title_resposta_API">Mais Populares<div className="seta"><BiSolidDownArrowAlt/></div></h2>
                    <div className="container_filmes">
                        {filmes_populares.length === 0 && <p>Carregando...</p>}
                        {filmes_populares.length > 0 && filmes_populares.map((filme) => <Carta_filme key={filme.id} filme={filme}/>)}
                    </div>
                    <br /><br /><br />
                    <h2 className="title_resposta_API">Melhores Avaliados<div className="seta"><BiSolidDownArrowAlt/></div></h2>
                    <div className="container_filmes">
                        {melhores_filmes.length === 0 && <p>Carregando...</p>}
                        {melhores_filmes.length > 0 && melhores_filmes.map((filme) => <Carta_filme key={filme.id} filme={filme}/>)}
                    </div>
                    <br /><br /><br />
                    <h2 className="title_resposta_API">Premiados<div className="seta"><BiSolidDownArrowAlt/></div></h2>
                    <div className="container_filmes">
                        {filmes_premiados.length === 0 && <p>Carregando...</p>}
                        {filmes_premiados.length > 0 && filmes_premiados.map((filme) => <Carta_filme key={filme.id} filme={filme}/>)}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home;