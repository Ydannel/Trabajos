import React , {useEffect, useState, createContext} from 'react';
export const ModalContext = createContext();
const ModalProvider = (props) => {
    const [id, guardarid]= useState(null);
         const [info, guardarreceta] = useState({})
    useEffect(
        ()=>{
            const Busca = async () =>{
                if (!id) return;
            const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const request = await fetch(url);
            const result = await request.json();
           // console.log(result.drinks);
            guardarreceta(result.drinks[0])
           }
           Busca();
        }, [id]);
    return ( 
        <ModalContext.Provider
        value={{
           guardarid, info
        }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
export default ModalProvider;