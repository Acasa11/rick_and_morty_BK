import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { filterCards, orderCards } from '../../redux/actions';

export default function Favorites({ onClose }) {

   const myFavorites = useSelector(state => state.myFavorites)

   const dispatch = useDispatch()

   const handlerOrder = (event) => {
      dispatch(orderCards(event.target.value))
   }

   const handlerFilter = event => {
      dispatch(filterCards(event.target.value))
   }

   return ( <div>
               <div>
               <select name='order' onChange={handlerOrder}>
                  <option value="A" >Ascendente</option>
                  <option value="D">Descendente</option>
               </select>

               <select name='filter' onChange={handlerFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
               </select>
               </div>

               <div style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               }}>
             
            {myFavorites.map((myFavorite) => {
               return (<Card
                  key={myFavorite.id}
                  id={myFavorite.id}
                  name={myFavorite.name}
                  status={myFavorite.status}
                  species={myFavorite.species}
                  gender={myFavorite.gender}
                  origin={myFavorite.origin}
                  image={myFavorite.image} 
                  onClose={onClose}/>)
               })}
               </div>
            </div>)
}