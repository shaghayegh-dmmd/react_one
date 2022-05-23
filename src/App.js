import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import img from './img.png';
import './styles/App.css';

const App = () => {
  return (
    <div className='container'>
      <Header name='shaghayegh' address='tehran' pelak={3} date={1401} />
      <h4 className='test'>test test test</h4>
      <h3 className='font-2'>font 2</h3>
      <div>
        <img src={img} alt='img' />
      </div>

    </div>
  )
};

export default App;