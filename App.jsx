{/**i listed the components in ascending order top to bottom how it would render on page, i got rid of the logos from vite */}
import { useState } from 'react'
import Navigation from './components/navigation'
import Username from './components/username'
import Login from './components/Login'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation fixed="top"/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        
        <h3>Login</h3>
        <Username/>{/**username components */}
        <br></br>
        <Login/> {/**password components */}

      </div>
      
    </>
  )
}

export default App 
