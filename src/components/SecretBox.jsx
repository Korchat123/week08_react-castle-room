import { useEffect, useState } from "react";
import PokemonBox from "./PokemonBox";
export default function SecretBox(controlSB){

    const tailwindDetail=`flex flex-col items-center justify-center w-full bg-amber-400 ${controlSB.show}`;
   // console.log(tailwindDetail);
    
    const [pokemonlist,setPokemonList]=useState([]);

    const [pokemonName,setPokemon]=useState("")
    const handleInputPokeName=(e)=>{
      setPokemon(e.target.value);
    }


    const [error, setError] = useState(null);

    const addPokemon = async () => {
   if(pokemonlist.length<controlSB.levelOfCastle){
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            const data = await res.json();
            console.log(data.sprites.front_default);

            setPokemonList([...pokemonlist,  
            <PokemonBox
                        onClick={()=>removePokemon(pokemonlist.length)} ///pokemonBox not have there own onClick this onclick have to send function to img for img to use onClick
                        key={pokemonlist.length} 
                        src={data.sprites.front_default} />
                      ]);
            console.log(pokemonlist);
            setPokemon("");
            setError(null);
           
        } catch (err) {
            console.log("ERROR", err.message);
            setError(err.message);
        }
       
      }
    };
   const removePokemon=(indexToRemove)=>{
      setPokemonList(pokemonlist.filter((_, index) => index !== indexToRemove));
    }
    
        
    return( <>
            <div className={tailwindDetail}>
            <span className="justify-center self-center w-[80%]"> Input Pokemon Name : 
            <input type="text" className="bg-white" onChange={handleInputPokeName} value={pokemonName}  />
            
            <button className="bg-amber-100 hover:bg-red-100 active:bg-red-500" onClick={addPokemon}>AddPokemon</button>
            </span>
            <div className="flex flex-row">
               {pokemonlist} 
              
               </div>
            </div>
            </>
        );

}