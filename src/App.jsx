import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Component/navbar.jsx'
import Massage from './Component/massage.jsx'
import ChatBox from './Component/chatbox.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='Divider'>
        <Navbar />
        <Massage />
        <ChatBox />
      </section>
    </>
  )
}

export default App
