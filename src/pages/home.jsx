import { useState, useEffect } from "react"
import "./home.css"
import Nav_bar from "../components/Nav_bar.jsx";
import Carta_filme from "../components/Carta_filme.jsx";
import { BiSolidDownArrowAlt } from "react-icons/bi";

function Home(){

    const filme_Url = import.meta.env.VITE_API
    const apikey = import.meta.env.VITE_API_KEY

    const[melhores_filmes, set_melhores_filmes]= useState([])
    const pegar_melhores_filmes = async (url) => {

        const resposta = await fetch(url)
        const dados = await resposta.json();

        set_melhores_filmes(dados.results)

    };

    useEffect(() => {

        const url_pesquisa_mfilmes = []

        for(let i = 1; i <= 1 ; i++){
            url_pesquisa_mfilmes.push(`https://api.themoviedb.org/3/movie/top_rated?api_key=afcbbffeeb2ca974f0343a7559714222&page=${i}`);
        }

        
        Promise.all(url_pesquisa_mfilmes.map(pegar_melhores_filmes)).then(() => {
            {url_pesquisa_mfilmes> 0 && url_pesquisa_mfilmes.map((paginas) => 
                pegar_melhores_filmes(paginas)
            )}
            
        
        });
    }, [])


    return(
        <div className="App">
            <Nav_bar/>
           <div className="container_resposta_API">
                <div className="container">
                    <h2 className="title_resposta_API">Melhores Filmes<div className="seta"><BiSolidDownArrowAlt/></div></h2>
                    <div className="container_filmes">
                        {melhores_filmes.length === 0 && <p>Carregando...</p>}
                        {melhores_filmes.length > 0 && melhores_filmes.map((filme) => <Carta_filme key={filme.id} filme={filme}/>)}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home;