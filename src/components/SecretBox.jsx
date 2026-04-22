import { useEffect, useState } from "react";
import PokemonBox from "./PokemonBox";

export default function SecretBox({ show, levelOfCastle, pokemonList, setPokemonList, isMoved }) {

    const tailwindDetail = `flex flex-col items-center justify-center w-full bg-amber-400 ${show}`;
    const [pokemonName, setPokemon] = useState("");
    const [error, setError] = useState(null);

    const handleInputPokeName = (e) => {
        setPokemon(e.target.value);
    };

    const addPokemon = async () => {
        if (pokemonList.length < levelOfCastle) {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
                const data = await res.json();

                setPokemonList([...pokemonList, data.sprites.front_default]);
                setPokemon("");
                setError(null);

            } catch (err) {
                console.log("ERROR", err.message);
                setError(err.message);
            }
        }
    };

    const removePokemon = (Toindex) => {
        setPokemonList(pokemonList.filter((_, index) => index !== Toindex));
    };

    // If moved, we hide the contents of the secret box
    if (isMoved) {
        return (
            <div className={tailwindDetail}>
                <h2 className="text-xl font-bold py-10 text-white">📦 The Secret Box is Empty. Pokemons have moved!</h2>
            </div>
        );
    }

    return (
        <>
            <div className={tailwindDetail}>
                <span className="justify-center self-center w-[80%] py-4"> 
                    Input Pokemon Name : 
                    <input type="text" className="bg-white mx-2 p-1 rounded" onChange={handleInputPokeName} value={pokemonName} />
                    <button className="bg-amber-100 px-4 py-1 rounded hover:bg-amber-200" onClick={addPokemon}>AddPokemon</button>
                    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                </span>
                <div className="flex flex-row flex-wrap justify-center min-h-[100px] gap-2 p-4">
                    {pokemonList.map((url, index) => (
                        <img 
                            key={`${url}-${index}`} 
                            src={url} 
                            onClick={() => removePokemon(index)} 
                            className="cursor-pointer relative hover:scale-110 transition-transform" 
                            alt="pokemon"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
