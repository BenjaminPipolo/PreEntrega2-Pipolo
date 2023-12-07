import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Error from './Components/Error'
import CartWidget from './Components/CartWidget/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <NavBar/>

    <Routes>

    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<CartWidget/>}/>
    <Route path='*' element={<Error/>}/>

    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
