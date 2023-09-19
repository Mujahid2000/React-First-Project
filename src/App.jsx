import './App.css'
import LineData from './assets/Components/LineData/LineData'
import Navbar from './assets/Components/Navbar/Navbar'
import Phones from './assets/Components/Phones/Phones'
import PriceOptions from './assets/Components/Price/PriceOptions'
// import DaisyNav from './assets/Components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* {<DaisyNav></DaisyNav>} */}
      <h1 className='text-7xl text-sky-600 ml-10'>Vite + React</h1>
     <PriceOptions></PriceOptions>
     <LineData></LineData>
     <Phones></Phones>
    </>
  )
}

export default App
