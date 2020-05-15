import React, { createContext, useState, useEffect } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas]= useState([])
    const [busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria:''
    });

    const [consultar, guardarConsulta] = useState(false);

    const {nombre, categoria} = busqueda;

    //cuando cambie se ejecuta
    useEffect(
        ()=>{
           if (consultar){
            const Busca = async () =>{
            const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const request = await fetch(url);
            const result = await request.json();
           // console.log(result.drinks);
            guardarRecetas(result.drinks)
           }
           Busca();
          }
     
        }, [busqueda]);
    return ( 
        <RecetasContext.Provider
        value ={{
           buscarRecetas, guardarConsulta, recetas
        }}>
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;