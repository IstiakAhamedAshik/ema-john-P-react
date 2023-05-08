import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const LogIn = () => {
  const [error, setError] = useState(null)
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    if (password.length < 6) {
      setError('password should be at least 6 charecter')
      return
    }
    signIn(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        navigate('/')
      })
      .catch((error) => {
        console.log('error :', error)
      })
  }
  return (
    <div className='form-container'>
      <h3 style={{ textAlign: 'center' }}>Login</h3>
      <form className='form-control' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='' required />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='' required />
        <input type='submit' className='loginbtn' value='Login' />
      </form>
      <p style={{ textAlign: 'center', textDecoration: 'none' }}>
        New to Ema-jhon? <Link to='/signup'>Create New Account</Link>
      </p>
      <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
    </div>
  )
}

export default LogIn
