export default function App() {
  const arrCard=[];
   class card{
    constructor(name,tailDetail){
          this.name=name;
          this.tailDetail=`flex flex-col justify-center text-white items-center pl-10 pr-10 pt-10 pb-10 ${tailDetail} w-full`;
        arrCard.push(this);
    }
  }

 function callDiv(arrayCard,index){
      const inClassName=arrayCard[index].tailDetail;
      if(arrayCard[index+1]!=null){
        
         return(<div className={inClassName}>{arrayCard[index].name} {callDiv(arrayCard,index+1)}</div>)
      }
        else{
      return(<div className={inClassName}>{arrayCard[index].name}</div>)
    }
    }


const castle =new card("Castle","bg-red-500");
const Tower =new card("Tower","bg-orange-300");
const Chamber =new card("Chamber","bg-yellow-500");
const Room =new card("Room","bg-green-300");
const Hall =new card("Hall","bg-green-500");
const Corridor =new card("Corridor","bg-blue-500");
const Gallery =new card("Gallery","bg-purple-300");
const Nook =new card("Nook","bg-purple-500");
 const output= callDiv(arrCard,0)
console.log(output);
   return (
 // callDiv(arrCard,0)
 <div>{output}</div>

// /* <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
//     <p className="text-purple-300">
//       Message for JSD 12
//       <span className="text-yellow-300">

//       </span>
//    </p>
//    <textarea
//       onChange=""
//       value="" 
//       className="bg-white text-black rounded px-2 py-1 
//       "placeholder="TYPE your message...."/>
//     <p> reply from secret room</p> */



// // </div>
   );
}
