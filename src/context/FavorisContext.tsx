import { createContext, useContext, useEffect, useState } from "react";
import { RestaurantType } from "../models/RestaurantType";

type contextProps = {
    children: React.ReactNode
}

type CreateContextRestoType ={
    favourites: RestaurantType[];
    addToFavs : (restaurant : RestaurantType) => void;
    remove : (restaurant : RestaurantType) => void;
}

const CreateContextResto = createContext({} as CreateContextRestoType);

export const useReactFavorisContext = () => {
    const contextRest = useContext(CreateContextResto);
    return contextRest;
}

export const ContextResto = ({children}: contextProps) =>{
    const [favourites, setFavourites] = useState<RestaurantType[]>([]);

    useEffect(() =>{
        localStorage.setItem('restaurants', JSON.stringify(favourites));
    }, [favourites])

    let seeFavs = JSON.parse(localStorage.getItem('restaurants') || "[]");
    useEffect(() => {
        if(favourites){
            setFavourites(seeFavs)
        }}, [])

    
    const saveToLocalStorages = (items : Array<RestaurantType>) =>{
    const key = localStorage.length.toString();
    localStorage.setItem(key, 'restaurantData' + JSON.stringify(items));
    }

    const addToFavs = (restaurant : RestaurantType) => {
        const newFavouriteList = [...favourites, restaurant ]
        if(favourites.includes(restaurant)){
            return null
        }else{
        setFavourites(newFavouriteList);
        saveToLocalStorages(newFavouriteList);
        }
}

    const remove = (restaurant : RestaurantType) =>{
    const newFavouriteList =  favourites.filter((favourite) => favourite.id !== restaurant.id);
    setFavourites(newFavouriteList);
    }


return (
    <CreateContextResto.Provider
    value={{
        addToFavs,
        remove,
        favourites,
    }}>
        {children}
    </CreateContextResto.Provider>
    )
}

