import ProductCard from './ProductCard'
import './App.css'

function App() {
  

  return (
    <div className='body'>
      <ProductCard
        name="Rachael Sofa"
        price="280,000"
        image="https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg"
        inStock={true}
      />

      <ProductCard
        name="Badru Sofa"
        price="265,000"
        image="https://i.pinimg.com/1200x/69/11/17/691117f428fddde091388ffb657d6e00.jpg"
        inStock={true}
      />

      <ProductCard
        name="Kanyinsola Sofa"
        price="345,000"
        image="https://i.pinimg.com/736x/43/30/23/4330237160fa95991f9340a2205de883.jpg"
        inStock={false}
      />
      
    </div>
  )
}

export default App