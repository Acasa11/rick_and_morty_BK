import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const inicialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(state = inicialState, {type, payload}) {
    switch(type){
        case ADD_FAV:{
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
            }
        }

        case REMOVE_FAV:
            const filteredCharacters = state.myFavorites.filter(
                favorite => favorite.id !== Number(payload)
            )
            return {
                ...state,
                allCharacters: filteredCharacters,
                myFavorites: filteredCharacters
            }
        case FILTER:
            if(payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredFavs = state.allCharacters.filter(
                char => char.gender === payload
            )
            return {
                ...state,
                myFavorites: filteredFavs,
            }
        
            case ORDER:
                const orderCopy = [...state.myFavorites]
                if(payload === "A")
                    orderCopy.sort((a , b) => a.id - b.id)
                if(payload === "D")
                    orderCopy.sort((a , b) => b.id - a.id)
                return {
                    ...state,
                    myFavorites: orderCopy
                }
        
        default:
            return{...state}
    }
}