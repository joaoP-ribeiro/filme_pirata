import {Link} from "react-router-dom";
import "./Nav_bar.css"
export default function Nav_bar(){
    return(
        <nav className="navbar">
            <h2>
                <Link className="title" to="/">Pirate Movies</Link>
            </h2>
            <form className="pesquisa_user">
                <input className="input_pesquisa" type="text" placeholder="Busque um filme..." />
                <button className="bt_pesquisar" type="submit">P</button>
            </form>
        </nav>  
    )
}