import { useEffect, useState } from "react";
import Castle from "./components/Castle";
import Inputbox from "./components/Inputbox";
import SimpleProAsyncAwait from "./example/async/SimpleProAsyncAwait";
import SecretBox from "./components/SecretBox";
export default function App() {


   const [show,setShow]= useState("hidden");

const [question,setQuestion]= useState("");
const handleQuestion=(e)=>{
setQuestion(e.target.value)
};
const [answer,setAnswer]= useState("");
const handleAnswer=(e)=>{
setAnswer(e.target.value)
};

useEffect(()=>{
    if(answer==="help"){
setShow("show");
 }   
},[answer])


const arrLabel=["Message for secret","Message for outside",
                "reply from secret room: ","send message: ",
                "Message from outside: ","Reply Message: "];
const factorI=0
const OutsideInput=<Inputbox handleQuestion={handleQuestion} 
                              factorI={0}
                              question={question} 
                              textLabel={arrLabel}
                              question2={(answer)?answer:"wait for message from secret room...."}
                              myMessage={question?question:"wait input message to secret room...."}
                              >                               
                     </Inputbox>;
const InsideInput=<Inputbox handleQuestion={handleAnswer} 
                              factorI={1}
                              question={answer} 
                              textLabel={arrLabel}
                              question2={question?question:"wait for message from outside....."}
                              myMessage={answer?answer:" wait input reply message to outside....."}
                              >         
                     </Inputbox>;
                 
                     
   return (


<>
{OutsideInput}
<SecretBox show={show} levelOfCastle={7}/>
<Castle Inputbox={InsideInput}/>
</>
 
   );
}
