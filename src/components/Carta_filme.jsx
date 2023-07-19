import { Link } from "react-router-dom"
import { GiPirateFlag } from "react-icons/gi"
import { BsFillPlayFill } from "react-icons/bs";
import "./Carta_filme.css"


export default function Carta_filme({filme, showlink = true}){

    const imagem_URL = import.meta.env.VITE_IMG


    return(

        <div className="carta_filme">
            <div className="foto_container">
                <img className="foto_filme" src={imagem_URL + filme.poster_path} alt={filme.title}/>
                {showlink && <Link  to={`/movie/${filme.id}`}><button><BsFillPlayFill/></button></Link>}
            </div>
            <div className="inf_container">
                {showlink && <Link className="nome_filme" to={`/movie/${filme.id}`}>{filme.title}</Link>}
                <p className="nota"><GiPirateFlag/> <div className="num_nota">{filme.vote_average}</div></p>  
            </div>
              
        </div>

    )
}