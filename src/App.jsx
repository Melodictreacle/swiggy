import { useState } from 'react'
import './App.css'
import Restcard from './components/rest_card'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Profile from './pages/profile'
import Search from './pages/search'
import Offers from './pages/offers'
import Cart from './pages/cart'
import Help from './pages/help'

function App() {
    return (<main>
        <Routes>
            <Route path="/home" element={<Home></Home>}/>
            <Route path="/profile" element={<Profile></Profile>}/>
            <Route path="/search" element={<Search></Search>}/>
            <Route path="/offers" element={<Offers></Offers>}/>
            <Route path="/cart" element={<Cart></Cart>}/>
            <Route path="/help" element={<Help></Help>}/>
        </Routes>
    </main>)
}

export default App