export default function Castle(Inside) {
  const arrCard=[];

   class card{
    constructor(name,tailDetail){
          this.name=name;
          this.tailDetail=`flex flex-col justify-center text-white items-center px-10 py-10 ${tailDetail} w-full`;
        arrCard.push(this);
    }
  }



 function callDiv(arrayCard,index){
      const inClassName=arrayCard[index].tailDetail;

      if(arrayCard[index+1]!=null){
        
         return(<div className={inClassName}>{arrayCard[index].name} {callDiv(arrayCard,index+1)}</div>)
      }
        else{console.log({Inside});
      return(<div className={inClassName}>{arrayCard[index].name} <div>{Inside.Inside}</div><div>{Inside.Inputbox}</div></div>)
    }
    }


const Castle =new card("Castle","bg-red-500");
const Tower =new card("Tower","bg-orange-300");
const Chamber =new card("Chamber","bg-yellow-500");
const Room =new card("Room","bg-green-300");
const Hall =new card("Hall","bg-green-500");
const Corridor =new card("Corridor","bg-blue-500");
const Gallery =new card("Gallery","bg-purple-300");
const Nook =new card("Nook","bg-purple-500");
const SecretRoom =new card("SecretRoom","bg-gray-600");
 const output= callDiv(arrCard,0);
console.log(output);
   return (
    <>
   {output}
    </>
   );
}
