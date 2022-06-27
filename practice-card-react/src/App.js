import React from 'react';
import './App.css';
import Card from  './Components/Card' 


function App() {
  return (
    <div className = 'App'>
      <Card
      title='Card Title'
      imageUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
      body='This is gibberish, but when is what I say not gibberish entirely. How funny is that.'
      />
    </div>    
  ); 
}

export default App;
