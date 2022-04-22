import { useEffect, useState } from "react";

function marvel(){
    const [heroes, setCharacter] = useState("");
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("heroes") === null) {
                setHero("Loading...")
            } else {
                setHero(localStorage.getItem("heroes"));
            }
        } else {
            const URL = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=3989e5948f21ca214366c6b47642f6eb&hash=e75218f442168db862ce36433bf006f4";
            fetch(URL).then(res=>res.json()).then(res=>{
                setHero(res.value);
                localStorage.setItem("heroes", res.value);
            })
        }
    }, []);

    return (
        <div>
          <div className="container">
            <h1>Personajes de Marvel</h1>
          </div>
        </div>
      );
}

export default App;