import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [boring, setBoring] = useState("");
  const [change, setChange] = useState("");
  
  useEffect(() =>{
    const getActivity = async ()=> {
      const response = await fetch(`http://bored.api.lewagon.com/api/activity/`);
      const data = await response.json();
      console.log(data);
      setBoring(data.activity);
    } 
    getActivity()
  }, [change])

   const changeActivity = ()=> {
     //e.preventDefault();
     setChange(boring);
   }
  
    return(
      <div>
        <div className='container'>
          <h3>{boring}</h3>
        </div>
        <div className='container'>
          <button onClick={changeActivity} className='btn'>Get activity</button>
        </div>
      </div>
    ) 
}

export default App;
