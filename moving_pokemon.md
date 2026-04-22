# Moving Pokemon to Castle Rooms

To implement the feature where Pokemons move from the Secret Box to the Castle rooms, we need to change how state is managed.

## 1. Lifting State to `App.jsx`
Currently, `pokemonList` is inside `SecretBox.jsx`. The `Castle` component cannot see it.
We must move `pokemonList` and `setPokemonList` up to `App.jsx`.

## 2. Changes in `App.jsx`
-   **State**: Define `const [pokemonList, setPokemonList] = useState([])`.
-   **New State**: `const [isMovedToRooms, setIsMovedToRooms] = useState(false)`. This tracks if the Pokemons are in the Secret Box or distributed in the Castle.
-   **Logic**: A button that only appears when `pokemonList.length === 9` (the number of rooms).
-   **Action**: When clicked, `setIsMovedToRooms(true)` is set.

## 3. Changes in `SecretBox.jsx`
-   It will now receive `pokemonList` and `setPokemonList` as props.
-   If `isMovedToRooms` is true, the Secret Box will be empty (or show a message).

## 4. Changes in `Castle.jsx`
-   It will receive the `pokemonList` as a prop.
-   The `reduceRight` logic will be updated to display `pokemonList[index]` inside each room.

---

## Technical Implementation (Draft)

### `Castle.jsx` Update:
```javascript
export default function Castle({ Inputbox, pokemonList, isMoved }) {
  return CASTLE_LAYERS.reduceRight((acc, layer, index) => (
    <div key={layer.name} className="...">
      <h1>{layer.name}</h1>
      {/* Display pokemon at the current index if they have been moved */}
      {isMoved && pokemonList[index] && (
        <img src={pokemonList[index]} className="w-16 h-16" alt="room-poke" />
      )}
      {acc}
    </div>
  ), Inputbox);
}
```

### `App.jsx` Button Logic:
```javascript
{pokemonList.length === 9 && !isMoved && (
  <button 
    onClick={() => setIsMoved(true)}
    className="bg-blue-500 p-4 rounded text-white font-bold"
  >
    Move Pokemons to Castle Rooms!
  </button>
)}
```
