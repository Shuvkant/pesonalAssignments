import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const name = location.state?.name || 'User'

  return (
    <div className='flex flex-col gap-4'>
      <h4>You have successfully logged in.</h4>
      Welcome to Dashboard{' '}
      <strong className='font-bold text-red-300 font-serif'>{name}</strong>
      <p>You are Genius</p>
    </div>
  )
}

export default Dashboard
