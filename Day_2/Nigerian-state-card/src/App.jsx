import StateCard from './components/StateCard'
import './App.css'

function App() {

  return (
    <div className='body'>
      <StateCard 
      state="Oyo"
      capital="Ibadan"
      region="West"
      population="7,100,000"
      children="Cocoa House"
      />
     
      <StateCard 
      state="Akwa Ibom"
      capital="Uyo"
      region="South"
      population="7,200,000"
      children="Ibeno Beach"
      />
      
      
      <StateCard 
      state="Katsina"
      capital="Katsina"
      region="North"
      population="9,400,000"
      children="Emir of Daura's Palace"
      />
      
      <StateCard 
      state="Enugu"
      capital="Abakaliki"
      region="East"
      population="2,200,000"
      children="Abakaliki Green Lake"
      />
     
    </div>
  )
}

export default App