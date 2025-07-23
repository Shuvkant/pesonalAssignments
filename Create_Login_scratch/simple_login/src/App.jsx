import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='border border-teal-50 rounded-2xl p-4'>
        <Login />
      </div>
    </>
  )
}

export default App
