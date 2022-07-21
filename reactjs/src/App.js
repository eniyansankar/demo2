import React from 'react';
import Footer from './Components/Footer';

import Header from './Components/Header';
import ParaSec from './Components/ParaSec';
import Slider from './Components/Slider';
import TBoxes from './Components/TBoxes';




function App() {
  return (
    <div>
   
   
  <Header/>
  <Slider/>
  <ParaSec/>
  <div style={{clear:'both'}}></div>
  <TBoxes/>
  <div style={{clear:'both'}}></div>
  <Footer/>
    
    </div>
  );  
}

export default App;
