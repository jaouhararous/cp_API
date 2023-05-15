import React, { useState, useEffect } from 'react';
import './App.css';
import Charachter from './components/Charachter';
import axios from 'axios';

function App() {
  const [Data, setData] = useState([]);

  // useEffect(() => {
  //   const getList = () => {
  //     fetch('https://rickandmortyapi.com/api/character?status=dead')
  //       .then(response => response.json())
  //       .then(result => {
  //         setData(result.results);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   };

  //   getList();
  // }, []);
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character?status=dead');
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getList();
  }, []);

  return (
    <div className="App">
      <h1 className='main-title'>🪦 In Memory of Who Died in Rick and Morty 🪦</h1>
      <div className='box-container'>
        {Data.map(character => (
          <Charachter key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
