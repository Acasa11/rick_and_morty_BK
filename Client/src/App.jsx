import './App.css';
import { useState } from 'react';
import { Routes , Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/nav.jsx';
import axios from 'axios';
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Favorites from './components/favorites/Favorites.jsx';

const URL = "https://rym2.up.railway.app/api/character"

const API_KEY = "henrystaff"

function App() {

      const navigate = useNavigate()

   const [ characters , setCharacters] = useState([])


   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data])
            } else {
               window.alert("¡El id debe ser un numero entre 1 y 826!");
            }
         }
      )
      navigate("/home")
   }

   const dispatch = useDispatch()

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
      }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route 
               path="/home" 
               element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route 
               path="/about" 
               element={<About/>} />
            <Route 
               path="/detail/:id" 
               element={<Detail/>} />
            <Route/>
            <Route 
            path="/favorites"
            element={<Favorites onClose={onClose}/>} />
               
         </Routes>
      </div>
   );
}

export default App;
