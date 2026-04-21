import { useState } from "react";
import Castle from "./components/Castle";
import Inputbox from "./components/Inputbox";
export default function App() {

const [question,setQuestion]= useState("");
const handleQuestion=(e)=>{
setQuestion(e.target.value)
};

const [answer,setAnswer]= useState("");
const handleAnswer=(e)=>{
setAnswer(e.target.value)
};
const arrLabel=["Message for secret","Message for outside","reply from secret room: ","send message: ","Message from outside: ","Reply Message: "];
const factorI=0
const Inputoutside=<Inputbox handleQuestion={handleQuestion} 
                              factorI={0}
                              question={question} 
                              textLabel={arrLabel}
                              question2={(answer)?answer:"wait for message from secret room...."}
                              myMessage={question?question:"wait input message to secret room...."}
                              >                               
                     </Inputbox>;
const Inputinside=<Inputbox handleQuestion={handleAnswer} 
                              factorI={1}
                              question={answer} 
                              textLabel={arrLabel}
                              question2={question?question:"wait for message from outside....."}
                              myMessage={answer?answer:" wait input reply message to outside....."}
                              >         
                     </Inputbox>;


   return (


<>
{Inputoutside}

<Castle Inputbox={Inputinside}></Castle>
</>
 
   );
}
