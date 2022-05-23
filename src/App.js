import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className='container'>
      <Header name='shaghayegh' address='tehran' pelak={3} date={1401} />
    </div>
  )
};

export default App;