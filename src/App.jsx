import { useEffect, useState } from 'react'
import './App.css'

function App() {

  var [result,setResult]=useState("0");
  const [display,setDisplay]=useState();

  useEffect(()=>{

     if(result<1){
      setResult('0');
     }
  },[result])

  const resultValue=()=>{

    let originalString=result;
    let s1='';
    let s2='';
    let c='';
    /* 
    This loop has split first number second number and Symbol
    Example:
       result="12+3"
       s1=12
       s2=3
       c=+
     */
    for(let i=0;i<originalString.length;i++){
      if(originalString[i]=='+'){
        c=originalString[i];
        s2=originalString.slice(i+1);
        break;
      }
      else if(originalString[i]=='-'){
        c=originalString[i];
        s2=originalString.slice(i+1);
        break;
      }
      else if(originalString[i]=='*'){
        c=originalString[i];
        s2=originalString.slice(i+1);
        break;

      }
      else if(originalString[i]=='/'){
        c=originalString[i];
        s2=originalString.slice(i+1);
        break;

      }
      else{
        s1=s1+originalString[i];
      }

    }
   let n1=parseInt(s1);
   let n2=parseInt(s2);
   let n3=0
   switch(c){
    case '+':
      n3=n1+n2;
      break;
    case '-':
      n3=n1-n2;
      break;
    case '*':
      n3=n1*n2;
      break;
    case '/':
      n3=n1/n2;
      break;
    
   }

   setResult(' '+n3);
    

  }

  function backSpace(){
    if(result.length<=1 || result==''){
      setResult("0")
    }
    else{
    setResult(result.slice(0,result.length-1))
  }
  }


  return (
    <>
      <h1>React Calculator</h1>
     <div className="container">
     
     <div className="text">
      <input type="text" id='text' value={result} onChange={(e)=>setResult(e.target.value)} />
      <p id='backspace' onClick={()=>{backSpace()}}>⌫</p>
     </div>

     <div className="input">
      <p onClick={()=>setResult(" "+result.slice(1)+"1")}>1</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"2")}>2</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"3")}>3</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"+")}>+</p>
     </div>
     <div className="input">
      <p onClick={()=>setResult(" "+result.slice(1)+"4")} >4</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"5")}>5</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"6")}>6</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"-")}>-</p>
     </div>
     <div className="input">
      <p onClick={()=>setResult(" "+result.slice(1)+"7")}>7</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"8")}>8</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"9")}>9</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"*")}>*</p>
     </div>
     <div className="input">
      <p onClick={()=>setResult(" "+result.slice(1)+"/")}>/</p>
      <p onClick={()=>setResult(" "+result.slice(1)+"0")}>0</p>
      <p onClick={()=>setResult("0")}>CLR</p>
      <p onClick={resultValue}>=</p>
     </div>
     

     </div>
    </>
  )
}

export default App
