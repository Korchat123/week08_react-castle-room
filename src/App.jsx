import { useState } from "react";
import Castle from "./components/Castle";
import Inputbox from "./components/Inputbox";
export default function App() {

const [question,setQuestion]= useState("");
const handleQuestion=(e)=>{
setQuestion(e.target.value)
};

const [question2,setQuestion2]= useState("");
const handleQuestion2=(e)=>{
setQuestion2(e.target.value)
};

const Inputoutside=<Inputbox handleQuestion={handleQuestion} question={question} question2={question2?question2:"wait for message from secret room"}></Inputbox>;
const Inputinside=<Inputbox handleQuestion={handleQuestion2} question={question2} question2={question?question:"wait for message from outside"}></Inputbox>;


   return (


<>
{Inputoutside}
<Castle Inside={question} Inputbox={Inputinside}></Castle>
</>
 
   );
}
