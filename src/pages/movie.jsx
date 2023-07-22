import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Nav_bar from "../components/Nav_bar.jsx";
import "./movie.css"

    const filme_Url = import.meta.env.VITE_API
    const apikey = import.meta.env.VITE_API_KEY

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
        const filme_URL = `${filme_Url}${id}?${apikey}`

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
            <div className="container_inf">
                <div>{filme && (
                    <>
                        <div className="inf_title_filme">{filme.title}</div>
                    
                    
                    
                    
                    </>
                
                )}</div>
            </div>
            
        </div>
    )
}
