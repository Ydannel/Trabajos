import React, {createContext, useState, useEffect} from 'react';

//crear el context 

export const CategoriasContext = createContext();


//siempre hay que crear el provider
//es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {

    const [categorias, guardarCategorias]= useState([])
     //api
     useEffect(
        ()=>{
          const API = async () =>{
           
          const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
          const request = await fetch(url);
          const result = await request.json();
          guardarCategorias(result.drinks)
          }
    
          API();
    
        }, []);
    return (
        <CategoriasContext.Provider
        value ={
            {
                categorias
            }
        }
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}
export default CategoriasProvider;