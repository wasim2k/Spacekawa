import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
function App() {

  const [results, setResults] = useState([]);
  const [show,setShow]=useState(true); 

  useEffect(() => {
    const getData = async()=>{
      const res =await axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
      setResults(res.data.results)
    }
    getData()
  },[])
  return(
    <div>
      <ul>
        {
          results.map((item) =>(
            <li key={item.email}>
              <div className="App">
              {
       show?<p>{item.name.title} {item.name.first} {item.name.last}<br></br>
       {item.location.street.number} {item.location.street.name} {item.location.street.city}<br></br>
         {item.gender}</p>:null
     }
                </div>
              <div className="container">
                 <div onClick={()=>setShow(!show)} className="design">

             
             <p className="gender">{item.gender}</p> <br></br>
              <p className="name"> 
               {item.name.title} {item.name.first} {item.name.last}</p>
              <p className="email">{item.email}</p> 
                 
                
            </div>
            </div>
            </li>
          ))
        }
        </ul>
        </div>
  )

      }    
export default App;