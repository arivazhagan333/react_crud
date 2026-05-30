// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Axios from 'axios';
function App() 
{
  // let listItems=new Array();
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [addr,setAddr]=useState("");
  const [liveData,setLiveData]=useState([]);
  const [newName,setNewName]=useState([]);

  // const v= Object.entries(gdata);

  const addData=()=>
  {
    Axios.post("http://localhost:8081/print",{
      na:name,
      age:age,
      address:addr
    })
  }
  
  useEffect(()=>
  {
    Axios.get("http://localhost:8081/read").then(res=>{setLiveData(res.data)});
  },[]);

  

  const updateName=(id)=>{
    Axios.put("http://localhost:8081/update",
      {
      id:id,newName:newName
    })
  }

  const dele=(id)=>
  {
    Axios.delete(`http://localhost:8081/delete/${id}`);

  }

  return (
    
    <div className="App">
      
            <h1> hospital management</h1>

    <input type="text" placeholder="enter name" name="name" onChange={(e)=>{setName(e.target.value)}} />  <br></br><br></br>
    <input type="text" placeholder="enter age" name="age" onChange={(e)=>{setAge(e.target.value)}} />  <br></br><br></br>
    <input type="text" placeholder="enter addr" name="addr" onChange={(e)=>{setAddr(e.target.value)}} />  <br></br><br></br>
    <input type="button" value="submit" onClick={addData} />  <br></br><br></br>
    
    
     <table>
      <tr>
        <td> NAME </td>
        <td> AGE </td>

        <td> ADDRESS  </td>
      </tr>
       
     {
      liveData.map((val,key)=>{
        return (<tr>
          <td>{val.name}</td>
          <td>{val.age}</td>
          <td>{val.addr}</td>
          
           
           <td>
            <input type="text" placeholder='enter update name' name='newName' onChange={(e)=>setNewName(e.target.value)}></input>
            <input type="button" onClick={()=>updateName(val._id)} value={"edit"}></input>
           </td>
           <td><button onClick={()=>{dele(val._id)}}> delete</button></td>
         </tr>

         
         
         )
      })
     }
     </table>
    </div>

  );
}

export default App;
