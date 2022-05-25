import React from "react";
import '../../App.css';
//import memesData from "../../memesData";


export default function Meme(){
    const[formData,setFormData] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/28j0te.jpg"
    });
    const[allmemes,setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").
        then(res => res.json()).
        then(data =>setAllMemes(data.data.memes))
    },[])
    function handleSubmit(e){
       // const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()*allmemes.length);
        const url = allmemes[randomNumber].url;
        setFormData(prevmeme =>({
            ...prevmeme,
            randomImage:url
        })); 
      }
   
    function handleChange(event){
        const{name,value} = event.target;
        setFormData(prevState =>({
            ...prevState,
            [name]:event.target.value
        }));
    }

    return(
        <div>
        <main>
            <div className="form">
                <input
                className="form-input"
                type="text"
                placeholder="top text"
                onChange={handleChange}
                name="topText"
                value={formData.topText}
                />
                <input
                className="form-input"  
                type="text"
                placeholder="bottom-text"
                onChange={handleChange}
                name="bottomText"
                value={formData.bottomText}
                />
                <button className="form-button" onClick={handleSubmit}>Get a new meme image </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={formData.randomImage}/>
                <h2 className="meme-text top">{formData.topText}</h2>
                <h2 className="meme-text bottom">{formData.bottomText}</h2>
            </div>
        </main>
        </div>
    )
}