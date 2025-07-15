import { TabsDemo } from './components/tabs/TabsDemo'
import Bg from './assets/bg.jpg'
import './App.css'

function App() {

  return (
    <>
      <div className='relative h-screen w-screen'>
        <img src={Bg} className='absolute h-screen bg-cover bg-center w-screen' alt="" />
        <div className='w-screen h-screen absolute bg-black opacity-55'></div>
        <TabsDemo/>
      </div>
    </>
  )
}

export default App
