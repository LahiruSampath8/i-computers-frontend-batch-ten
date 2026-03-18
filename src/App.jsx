
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'
import Trendingproducts from './components/trendingproducts'
import TestPage from './pages/test'

function App() {
  return (

      <div className='w-full h-screen flex  items-center justify-center bg-primary text-secondary'  >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/test' element={<TestPage />} />
        
        </Routes>
       
 
      </div>
  
  
  )
}

export default App
