const CASTLE_LAYERS = [
  { name: "Castle", color: "bg-red-500" },
  { name: "Tower", color: "bg-orange-300" },
  { name: "Chamber", color: "bg-yellow-500" },
  { name: "Room", color: "bg-green-300" },
  { name: "Hall", color: "bg-green-500" },
  { name: "Corridor", color: "bg-blue-500" },
  { name: "Gallery", color: "bg-purple-300" },
  { name: "Nook", color: "bg-purple-500" },
  { name: "SecretRoom", color: "bg-gray-600" },
];

export default function Castle({ Inputbox, pokemonList, isMoved }) {
  // We "reduce" the array from right-to-left to wrap each layer around the previous one.
  // The 'index' in reduceRight refers to the index of the current layer in CASTLE_LAYERS.
  return CASTLE_LAYERS.reduceRight((acc, layer, index) => (
    <div key={layer.name} className={`flex flex-col justify-center text-white items-center px-10 py-10 pb-0 ${layer.color} w-full`}>
      <h1 className="font-bold text-lg mb-2">{layer.name}</h1>
      
      {/* If moved, show the pokemon corresponding to this room's index */}
      {isMoved && pokemonList[index] && (
        <div className="animate-bounce">
            <img src={pokemonList[index]} className="w-20 h-20 drop-shadow-lg" alt={`pokemon-in-${layer.name}`} />
        </div>
      )}

      {acc}
    </div>
  ), Inputbox);
}
