import React from 'react';



const Charachter = ({ character }) => {
  return (
    <div className='box'>
      <h1>{character.name}</h1>
      <img src={character.image} alt="character image" />
    </div>
  );
};

export default Charachter;
