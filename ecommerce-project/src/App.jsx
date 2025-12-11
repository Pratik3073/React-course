import './App.css'
import { HomePage } from './Pages/HomePage'
import { Routes,Route } from 'react-router'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='checkout' element={<div>test page</div>} />
     
    </Routes>
  )
}

export default App
