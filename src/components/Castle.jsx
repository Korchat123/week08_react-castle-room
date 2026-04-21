export default function Castle(Inside) {
  const arrCard=[];

   class card{
    constructor(name,tailDetail){
          this.name=name;
          this.tailDetail=`flex flex-col justify-center text-white items-center px-10 py-10 pb-0 ${tailDetail} w-full`;
        arrCard.push(this);
    }
  }



 function callDiv(arrayCard,index){
      const inClassName=arrayCard[index].tailDetail;

      if(arrayCard[index+1]!=null){
        
         return(<div className={inClassName}><h1>{arrayCard[index].name} </h1>{callDiv(arrayCard,index+1)}</div>)
      }
        else{console.log({Inside});
      return(<div className={inClassName}><h1>{ arrayCard[index].name}</h1> <div>{Inside.Inputbox}</div></div>)
    }
    }


const castle =new card("Castle","bg-red-500");
const tower =new card("Tower","bg-orange-300");
const chamber =new card("Chamber","bg-yellow-500");
const room =new card("Room","bg-green-300");
const hall =new card("Hall","bg-green-500");
const corridor =new card("Corridor","bg-blue-500");
const gallery =new card("Gallery","bg-purple-300");
const nook =new card("Nook","bg-purple-500");
const secretRoom =new card("SecretRoom","bg-gray-600");
 const output= callDiv(arrCard,0);
//console.log(output);
   return (
    <>
   {output}
    </>
   );
}
