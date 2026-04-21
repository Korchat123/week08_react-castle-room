
export default function Inputbox({factorI,handleQuestion,question,question2,textLabel,myMessage}){
return( 

    <div className="pb-[10vh] py-[10vh] gap-y-4 flex flex-col justify-center w-full items-center h-full bg-gray-800 text-white">
    <p className="text-purple-300">
         {textLabel[factorI*1]}
   </p>
   <textarea
      onChange={handleQuestion}
      value={question} 
      className="bg-white text-black rounded px-2 py-1" 
      placeholder="TYPE your message...."/>
        
   <p> 
        {textLabel[factorI+2]}
        <span className="text-yellow-300">
        {question2}
      </span>  
      </p>

    <p>
        {textLabel[factorI+4]}
        <span> {myMessage}</span> 
    </p>

 </div>
   )


}