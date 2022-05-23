import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import img from './img.png';
import './styles/App.css';

const App = () => {
  return (
    <div className='container'>
      {/* <Header name='shaghayegh' address='tehran' pelak={3} date={1401} /> */}
      <div>
        <img src={img} />
      </div>

    </div>
  )
};

export default App;