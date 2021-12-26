import React,{useContext} from 'react';
import Context from "../context"
import { useNavigate } from "react-router-dom";

export default function Registration(){
    let [name,setName]  = React.useState("");
    let [group,setGroup]  = React.useState("");
    let [description,setDescription] = React.useState("");
    let globalList = useContext(Context);
    let arr = globalList[0];
    let navigate = useNavigate();
  
    function submitHandler(e){
      e.preventDefault();
      arr.push({
        name:name,group:group,description:description
      })
      globalList[1](arr)
      navigate("/list");
    }
  
    return (
      <div className="App">
        
        <form onSubmit={submitHandler}>
  
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
        <input type="text" value={group} onChange={(e)=>setGroup(e.target.value)} placeholder="enter group"/>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="enter description"/>
  
        <input type="submit" value="submit"/>
        </form>
  
      </div>
    );
}