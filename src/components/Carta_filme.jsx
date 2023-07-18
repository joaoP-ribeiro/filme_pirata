import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"
import "./Carta_filme.css"


export default function Carta_filme({filme, showlink = true}){

    const imagem_URL = import.meta.env.VITE_IMG


    return(

        <div className="carta_filme">
            <img className="foto_filme" src={imagem_URL + filme.poster_path} alt={filme.title}/>
            <h2 className="nome_filme">{filme.title}</h2>
            <p className="nota">
                <FaStar/> {filme.vote_average}
            </p>
            {showlink && <Link className="bt_mais" to={`/movie/${filme.id}`}>MAIS</Link>}  
        </div>

    )
}