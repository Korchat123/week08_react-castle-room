
export default function Inputbox({handleQuestion,question,question2,text,text2}){
return( 

    <div className="pb-[10vh] py-[10vh] gap-y-4 flex flex-col justify-center w-full items-center h-full bg-gray-800 text-white">
    <p className="text-purple-300">
        {text}
   </p>
      
   
   <textarea
      onChange={handleQuestion}
      value={question} 
      className="bg-white text-black rounded px-2 py-1" 
      placeholder="TYPE your message...."/>

    <span className="text-yellow-300">
        {question2}
      </span>  
    <p> {text2}</p> 
 </div>
   )


}