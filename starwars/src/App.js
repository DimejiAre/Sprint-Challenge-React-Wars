import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import styled from 'styled-components';

const StyledApp = styled.div`
  h1 {
    text-align: center;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const getCharacters = (url) => {
  debugger
    axios.get(url)
    .then(response => {
      setData(response.data.results);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous)
    })
    .catch(err => {
      console.log('An error occured');
    })
}


  useEffect(()=>{
    axios.get('https://swapi.co/api/people')
    .then(response => {
      setData(response.data.results);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous)
    })
    .catch(err => {
      console.log('An error occured');
    })
  },[])

  return (
    <StyledApp>
      <h1 className='Header'>React Wars</h1>
      <button onClick={() => getCharacters(previousUrl)}>Previous</button>
      <button onClick={() => getCharacters(nextUrl)}>Next</button>
      <Characters characterList={data}/>
    </StyledApp>
  );
}

export default App;
