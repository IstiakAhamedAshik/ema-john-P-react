import React, { useContext, useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/UserContext'
const SignUp = () => {
  const [error, setError] = useState(null)
  const { createUser } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const confirmPass = form.confirm.value
    if (password.length < 6) {
      setError('password should be at least 6 charecter')
      return
    }
    if (password !== confirmPass) {
      setError('password is not matching')
      return
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
      })
      .catch((error) => {
        console.log('error :', error)
      })
  }
  return (
    <div className='form-container'>
      <h3 style={{ textAlign: 'center' }}>SignUp</h3>
      <form className='form-control' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='' required />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='' required />
        <label htmlFor='password'>Confirm password</label>
        <input type='password' name='confirm' id='' />
        <input type='submit' className='loginbtn' value='Sign Up' />
      </form>
      <p style={{ textAlign: 'center' }}>
        Already Have an account? <Link to='/login'>Login</Link>
      </p>
      <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
    </div>
  )
}

export default SignUp
