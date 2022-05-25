import React from "react";
import troll from "../../images/troll-face.png";
import "../../App.css";



export default function Header(){
    return(
        <>
        <header className="header">
            <img className="image-logo" src={troll} alt="logo"/>
         <h2 className="header-title">Meme Generator</h2>
         <h4 className="header-project">Reacts-projects3</h4>
        </header>
        
        </>
    )
}
