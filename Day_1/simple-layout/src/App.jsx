import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className='whole'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App