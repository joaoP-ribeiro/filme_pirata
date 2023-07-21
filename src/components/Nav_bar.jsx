import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import "./Nav_bar.css"
import navLogo from "../assets/Pirackie.png"

export default function Nav_bar(){

    const[pesquisa, set_pesquisa] = useState("")

    const navegar = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!pesquisa) return


        navegar(`/search?nome=${pesquisa}`)
        set_pesquisa("");
    };


    return(
        <nav className="navbar">
            <div className="img_title"><Link  to="/"><img className="title" src={navLogo} alt="" /></Link></div>
            <form onSubmit={handleSubmit} className="pesquisa_user">
                <input className="input_pesquisa" type="text" placeholder="Busque um filme..." onChange={(e) => set_pesquisa(e.target.value)
                } value={pesquisa}/>
                <button className="bt_pesquisar" type="submit"><BiSolidSearchAlt2/></button>
            </form>
        </nav>  
    )
}