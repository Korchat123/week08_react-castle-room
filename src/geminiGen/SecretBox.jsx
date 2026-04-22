import { useState } from "react";
import PokemonBox from "./PokemonBox";

export default function SecretBox(controlSB) {
    const tailwindDetail = `flex flex-col items-center justify-center w-full bg-amber-400 ${controlSB.show}`;
    const [pokemonlist, setPokemonList] = useState([]);
    const [pokemonName, setPokemon] = useState("");
    const [error, setError] = useState(null);

    const handleInputPokeName = (e) => {
        setPokemon(e.target.value);
    }

    const removePokemon = (indexToRemove) => {
        setPokemonList(prevList =>{ 
           console.log(prevList);
           return prevList.filter((_, index) => index !== indexToRemove)
           //console.log(prevList);

        });
    }

    const addPokemon = async () => {
        if (pokemonlist.length < controlSB.levelOfCastle) {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
                const data = await res.json();
                
                // Store only the URL in the list for better state management
                setPokemonList([...pokemonlist, data.sprites.front_default]);
                setPokemon("");
                setError(null);
            } catch (err) {
                console.log("ERROR", err.message);
                setError(err.message);
            }
        }
    };

    return (
        <>
            <div className={tailwindDetail}>
                <span className="justify-center self-center w-[80%]"> 
                    Input Pokemon Name : 
                    <input type="text" className="bg-white" onChange={handleInputPokeName} value={pokemonName} />
                    <button className="bg-amber-100 hover:bg-red-100 active:bg-red-500 ml-2 px-2" onClick={addPokemon}>AddPokemon</button>
                </span>
                {error && <p className="text-red-600">{error}</p>}
                <div className="flex flex-row">
                    {pokemonlist.map((url, index) => (
                        <PokemonBox key={`${url}-${index}`} src={url} onClick={() => removePokemon(index)} />
                    ))}
                </div>
            </div>
        </>
    );
}
