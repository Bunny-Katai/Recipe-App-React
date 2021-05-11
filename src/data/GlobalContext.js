import  { useContext, createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext)
};
function getStorage () {
    return localStorage.getItem('favorites')?JSON.parse(localStorage.getItem('favorites')): [] 
}
export const GlobalContextProvider = (props)=> {
    const [favorites, setFavorites] = useState(getStorage())
    useEffect(()=> {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites]) 
    return (<GlobalContext.Provider value={{
        favorites, 
        toggleFavorite: (uri)=> {
            const newFavorites = [...favorites]
            if (newFavorites.includes(uri)){
                newFavorites.splice(newFavorites.indexOf(uri), 1)
            } else {
                newFavorites.push(uri)
            }
            setFavorites(newFavorites)
        }
    }}>
                {props.children}
            </GlobalContext.Provider>)
}