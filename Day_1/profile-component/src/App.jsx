import React from 'react'
import Profile from './components/Profile';
import './App.css'

function App() {
  
  return (
    <div>
      <h1>Profile Challenge</h1>

      <Profile
        name="Taiwo Owoseje"
        role="Foremost AI Developer"
        bio="Passionate about building intelligent solutions that improve real-world industries like furniture and manufacturing."
        image="https://i.pinimg.com/1200x/ad/06/b7/ad06b7eaac3fda9bae6a40d2e2a36ca3.jpg" 
      />


      <Profile
        name="Ayomiposi Oluwagbotemi"
        role="Creative Director"
        bio="A visionary with a deep sense of originality and excellence in everything I do."
        image="https://i.pinimg.com/1200x/23/7c/16/237c163a6168e52651f00b54a00d68c3.jpg"
      />

    </div>
  );
}

export default App;