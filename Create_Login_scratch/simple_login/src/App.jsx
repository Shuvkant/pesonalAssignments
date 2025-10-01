import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import AppRoutes from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='border border-teal-50 rounded-2xl p-4'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
