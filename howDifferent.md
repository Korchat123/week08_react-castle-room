# Code Evolution Summary: Before vs After

This file tracks the major architectural changes made to the "React Castle Rooms" project.

---

## 1. `src/components/SecretBox.jsx`

### **Old Version (Anti-Pattern)**
*   Stored React Elements (`<img />`) directly in state.
*   Used `.length` for removal logic (caused stale closures).
*   State was local to this component (hidden from the Castle).

```javascript
// ... (imports)
export default function SecretBox(controlSB){
    const [pokemonlist,setPokemonList]=useState([]);
    // ...
    const addPokemon = async () => {
       // ...
       setPokemonList([...pokemonlist, 
            <img onClick={()=>removePokemon(pokemonlist.length)} src={data.sprites.front_default} />
       ]);
    };

    const removePokemon=(Toindex)=>{
       setPokemonList(pokemonlist.filter((_, index) => index !== Toindex));
    }

    return( <div>{pokemonlist}</div> );
}
```

### **New Version (Best Practice)**
*   State is **lifted** to `App.jsx` to be shared.
*   Stores only **Data** (URL strings).
*   Renders via `.map()` for fresh indexes.
*   Handles `isMoved` state.

```javascript
export default function SecretBox({ pokemonList, setPokemonList, isMoved, ... }) {
    // ...
    if (isMoved) return (<div>📦 The Secret Box is Empty.</div>);

    return (
        <div className="flex flex-row">
            {pokemonList.map((url, index) => (
                <img key={`${url}-${index}`} src={url} onClick={() => removePokemon(index)} />
            ))}
        </div>
    );
}
```

---

## 2. `src/components/Castle.jsx`

### **Old Version (Complex Recursion)**
*   Defined a `class` inside a function (inefficient).
*   Pushed to an external array `arrCard` during render (Side Effect).
*   Used recursive function `createInsideDiv`.

```javascript
export default function Castle(Inside) {
  const arrCard=[];
  class card { ... }
  function createInsideDiv(arrayCard,index){ ... }

  const castle =new card("Castle","bg-red-500");
  // ... (8 more instances)
  const output= createInsideDiv(arrCard,0);
  return (<>{output}</>);
}
```

### **New Version (Clean Functional Pattern)**
*   Uses a static `CASTLE_LAYERS` constant outside the component.
*   Uses `.reduceRight()` to wrap divs from the inside-out.
*   Pure render function with no side effects.
*   Displays Pokemons in rooms using the shared `pokemonList`.

```javascript
const CASTLE_LAYERS = [ { name: "Castle", ... }, ... ];

export default function Castle({ Inputbox, pokemonList, isMoved }) {
  return CASTLE_LAYERS.reduceRight((acc, layer, index) => (
    <div className={layer.color}>
      <h1>{layer.name}</h1>
      {isMoved && pokemonList[index] && <img src={pokemonList[index]} />}
      {acc}
    </div>
  ), Inputbox);
}
```

---

## 3. `src/App.jsx`

### **Old Version (Limited Control)**
*   Hardcoded `levelOfCastle={7}`.
*   No way to share data between `SecretBox` and `Castle`.

```javascript
export default function App() {
   // ... UI state only
   return (
    <>
      <SecretBox levelOfCastle={7}/>
      <Castle Inputbox={InsideInput}/>
    </>
   );
}
```

### **New Version (Orchestrator)**
*   Holds the **Source of Truth** (`pokemonList`, `isMoved`).
*   Added logic to Fill/Reset the castle.
*   Coordinates props between sibling components.

```javascript
export default function App() {
   const [pokemonList, setPokemonList] = useState([]);
   const [isMoved, setIsMoved] = useState(false);

   return (
    <>
      {pokemonList.length === 9 && !isMoved && (
          <button onClick={() => setIsMoved(true)}>Move to Rooms</button>
      )}
      <SecretBox pokemonList={pokemonList} isMoved={isMoved} ... />
      <Castle pokemonList={pokemonList} isMoved={isMoved} ... />
    </>
   );
}
```

---

## Key Improvements Summary:
1.  **State Management**: Moved state from local (SecretBox) to global (App) to allow component communication.
2.  **Data Consistency**: Switched from storing UI elements in state to storing raw data (URLs).
3.  **Performance**: Removed classes and side-effects from the render path in `Castle.jsx`.
4.  **UI/UX**: Added a logical flow where Pokemons "leave" the box and "enter" the rooms.
