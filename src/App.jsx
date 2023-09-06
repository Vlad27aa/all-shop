import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './routes/MainLayout'
import Home from './routes/Home'
import About from './routes/About'
import Contacts from './routes/Contacts'
import NewProduct from './routes/NewProduct'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="new-product" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
