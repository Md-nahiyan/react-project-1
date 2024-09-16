/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react'
import MealCard from './MealCard';
import SearchBar from './SearchBar';



export default function Meal() {

    const [meal, setMeal] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getMeal = async () => {
        const MEAL_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

        try {
            const response = await fetch(MEAL_URL);
            const data =await response.json();
            console.log(data.meals);

            if (data.meals) {
                setMeal(data.meals);  // Only set meal if meals exist
              } else {
                setMeal([]);  // Reset if no meals found
              }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( ()=> {
        getMeal();
    },[]);

  return (

    <>

        <h1 className='text-4xl text-center text-[#ffa64b] font-bold m-5'>Welcome to TheMealDB</h1>
        <SearchBar/>
        <div className='grid grid-cols-3 gap-5 w-[80%] mx-auto mt-5'>
            
            {
                meal.map ( (items)=> (
                    <MealCard key={items.idMeal} meals={items}/>
                ))
            }
            
        </div>
    </>
    
    
  )
}
