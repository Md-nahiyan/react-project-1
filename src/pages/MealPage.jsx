import React, { useEffect, useState } from 'react'


export default function MealPage() {
    const [mealPage, setMealPage] = useState([])
    
    const getmealPage = async ()=> {
        const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
        // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
        try {
            const response = await fetch(MEAL_URL);
            const data = await response.json();
            setMealPage(data.meals);
            console.log(data.meals)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=> {
        getmealPage();
    },[])
  return (
    <div>
        {
            mealPage.map( (item, index)=> (
                <div key={index} className='grid grid-cols-2'>
                    <div >
                        <h1>{item.strMeal}</h1>
                        <img src={item.strMealThumb} alt="" />
                    </div>
                    <div className='grid grid-cols-3'>
                        
                        
                        <a href="">{item.strIngredient1}</a>
                        <a href="">{item.strIngredient2}</a>
                        <a href="">{item.strIngredient3}</a>
                        <a href="">{item.strIngredient4}</a>
                        <a href="">{item.strIngredient5}</a>
                        <a href="">{item.strIngredient6}</a>
                        <a href="">{item.strIngredient7}</a>
                    </div>
                    <p className='text-center m-1o'>{item.strInstructions}</p>
                </div>
            ))
        }
         {/* <h1>Category: {strCategory}</h1> */}
        <h1>Welcome MEal Page</h1>
    </div>
  )
}


