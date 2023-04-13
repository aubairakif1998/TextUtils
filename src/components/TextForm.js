import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("enter text to convert into uppercase");
    const handleUpperClick=( )=>{
        setText(text.toUpperCase())
     }
     const handleOnChange=(event)=>{
        setText(event.target.value)
     }
  return (
    <>
    <div>
      <div className="mb-3"  style={{color:props.mode==='light'?'black':'white'}}>
       <h1> {props.heading }</h1>
        <textarea className="form-control" id="mybox" rows="9" value= {text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick= {handleUpperClick}
       
       >Convert to uppercase</button>
    </div>

    <h1 style={{color:props.mode==='light'?'black':'white'}}>Summary</h1>
    <p style={{color:props.mode==='light'?'black':'white'}}>Total number of characters: {text.length}</p>
    <p>Total number of words: {text.split(" ").length-1}</p> 

    <h1 style={{color:props.mode==='light'?'black':'white'}}>Preview</h1>
    <p style={{color:props.mode==='light'?'black':'white'}}>Total number of characters: {text.length}</p> 
    </>
    
  );
}
