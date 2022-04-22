import { useEffect, useState } from "react";

function marvel(){
    const [character, setCharacter] = useState("");
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("character") === null) {
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("character"));
            }
        } else {
            const URL = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=3989e5948f21ca214366c6b47642f6eb&hash=e75218f442168db862ce36433bf006f4";
            fetch(URL).then(res=>res.json()).then(res=>{
                setJoke(res.value);
                localStorage.setItem("character", res.value);
            })
        }
    }, []);

    return(
        <h2>{joke}</h2>
    )
}

export default Joke;