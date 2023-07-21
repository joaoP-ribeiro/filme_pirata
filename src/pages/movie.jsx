import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Nav_bar from "../components/Nav_bar.jsx";


export default function Movie(){
    const url_filme = window.location.href;
    const parte = url_filme.split("=")
    const id = parte.pop()

    const [filme, set_filme] = useState(null)
    const pegar_filme = async (url) => {

        const resposta = await fetch(url)
        const dados = await resposta.json();

        set_filme(dados)
    };

    useEffect(() =>{
        const filme_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=afcbbffeeb2ca974f0343a7559714222`

        pegar_filme(filme_URL)
    }, [id])

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      };




    return(
        <div className="App_inf">
            <Nav_bar/>
            <div>{filme && (<>{filme.title}</>)}</div>
        </div>
    )
}
