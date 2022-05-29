import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Cat from './components/Cat';
import Dog from './components/Dog';
import img from './img.png';
import './styles/App.css';

const App = () => {

const shaghayegh = (name) =>{
  alert(name);
}

const clickone = (e) =>{
  console.log(e);
}




  return (
    <div className='container'>
      { <button className='btn' onClick={() => shaghayegh("sterttr")}> click test </button>}
      <Body name = {"shaghayegh"} age = {3} />
    </div>
  )
};

export default App;