import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Ingrediant() {
    const {MealId}= useParams();
    const [ingrediant, setIngrediant] = useState([])

    const getIngrediant = async ()=> {
        const INGREDIANT_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${MealId}`;
       
        try {
            const response = await fetch(INGREDIANT_URL);
            const data = await response.json();
            setIngrediant(data.meals[0]);
            console.log(data.meals[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=> {
        getIngrediant();
    },[]);
  return (
    <div>
      {
        ingrediant.map( (item, index)=> (
            <div key={index}>
                <h1>{item.strIngredient1}</h1>
            </div>
        ))
      }
    </div>
  )
}

{/* <img src="" alt="" />
                            <a href="">{item.strIngredient1}</a>
                            <a href="">{item.strIngredient2}</a>
                            <a href="">{item.strIngredient3}</a>
                            <a href="">{item.strIngredient4}</a>
                            <a href="">{item.strIngredient5}</a>
                            <a href="">{item.strIngredient6}</a>
                            <a href="">{item.strIngredient7}</a> */}