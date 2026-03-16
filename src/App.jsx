
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'
import Trendingproducts from './components/trendingproducts'

function App() {
  return (

      <div className='w-full h-screen border-[6px] border-black flex  items-center justify-center'  >
        <Routes>
          <Route path='/' element={<HomePage />} />
          
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
       
 
      </div>
  
  
  )
}

export default App
