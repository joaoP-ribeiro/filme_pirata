import {Link} from "react-router-dom";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import "./Nav_bar.css"
import navLogo from "../assets/Pirackie.png"

export default function Nav_bar(){
    return(
        <nav className="navbar">
            <div className="img_title"><Link  to="/"><img className="title" src={navLogo} alt="" /></Link></div>
                
            
            <form className="pesquisa_user">
                <input className="input_pesquisa" type="text" placeholder="Busque um filme..." />
                <button className="bt_pesquisar" type="submit"><BiSolidSearchAlt2/></button>
            </form>
        </nav>  
    )
}