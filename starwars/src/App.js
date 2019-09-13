import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Characters from "./components/Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios.get('https://swapi.co/api/people')
    .then(response => {
      console.log(response.data.results)
      setData(response.data.results)
    })
    .catch(err => {
      console.log('An error occured')
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters characterList={data}/>
    </div>
  );
}

export default App;
