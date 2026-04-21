
export default function Inputbox({handleQuestion,question,question2}){
return( 

    <div className="pb-50 py-10 gap-y-4 flex flex-col justify-center w-full items-center h-full bg-gray-800 text-white">
    <p className="text-purple-300">
      Message for JSD 12
      <span className="text-yellow-300">

      </span>
   </p>
   <textarea
      onChange={handleQuestion}
      value={question} 
      className="bg-white text-black rounded px-2 py-1" 
      placeholder="TYPE your message...."/>
    <p> {question2}</p> 
 </div>
   )


}