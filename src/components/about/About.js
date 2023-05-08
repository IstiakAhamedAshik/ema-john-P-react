import { useContext } from 'react'
import { AuthContext } from '../context/UserContext'

const About = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <p> About your self</p>
      <h4>{user?.email}</h4>
    </div>
  )
}

export default About
