import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div>
      <div className='text-orange-500'>Home</div>
      <button type='button' onClick={handleClick}>
        Login
      </button>
    </div>
  )
}

export default Home
