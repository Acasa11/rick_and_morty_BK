import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {

   const dispatch = useDispatch()

   const [isFav , setIsFav] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(props.id))
      }
      else{
         setIsFav(true)
         dispatch(addFav(props))
      }

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div 
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "15px",
         }}
      >

         {
         isFav ? (
                 <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
         }

         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
            <img src={props.image} alt={props.name}/>
         </Link>
      </div>
   );
}