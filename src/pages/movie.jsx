import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Nav_bar from "../components/Nav_bar.jsx";
import Carta_filme from "../components/Carta_filme.jsx";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";
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
            <Nav_bar/>
            <div className="container_inf">
                <div>{filme && (
                    <>
                        <div className="card"><Carta_filme filme={filme} showLink={false}/></div>

                        <div className="inf">
                            <p className="tagline">{filme.title}</p>
                            <div className="info">
                                <h3>
                                <BsWallet2 /> Orçamento:
                                </h3>
                                <p>{formatCurrency(filme.budget)}</p>
                            </div>
                            <div className="info">
                                <h3>
                                <BsGraphUp /> Receita:
                                </h3>
                                <p>{formatCurrency(filme.revenue)}</p>
                            </div>
                            <div className="info">
                                <h3>
                                <BsHourglassSplit /> Duração:
                                </h3>
                                <p>{filme.runtime} minutos</p>
                            </div>
                            <div className="info description">
                                <h3>
                                <BsFillFileEarmarkTextFill /> Descrição:
                                </h3>
                                <p>{filme.overview}</p>
                            </div>
                        </div>
                    </>
                
                )}</div>
            </div>
            
        </div>
    )
}
