import {Link} from "react-router-dom";
import "./Nav_bar.css"
import navLogo from "../assets/Pirackie.png"

export default function Nav_bar(){
    return(
        <nav className="navbar">
            <h2>
                <Link className="title" to="/"><img src={navLogo} alt="" /></Link>
            </h2>
            <form className="pesquisa_user">
                <input className="input_pesquisa" type="text" placeholder="Busque um filme..." />
                <button className="bt_pesquisar" type="submit">P</button>
            </form>
        </nav>  
    )
}