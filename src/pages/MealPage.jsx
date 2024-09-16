// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import Ingrediant from '../components/Ingrediant';



export default function MealPage( ) {
    const{MealId} = useParams();
    const [mealPage, setMealPage] = useState([])
    
    const getmealPage = async ()=> {
        const MEAL_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`;
       
        try {
            const response = await fetch(MEAL_URL);
            const data = await response.json();
            setMealPage(data.meals);
            console.log(data.meals[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=> {
        getmealPage();
    },[]);

  return (
    <div className='bg-[#2d1f12]'>
        {
            (!mealPage)? "": mealPage.map( (item, index)=> (
                <div key={index} className=' w-[70%] mx-auto p-3 gap-5 '>
                    
                    <div className='grid grid-cols-2'>
                        <div >
                            <h1 className=' text-white font-bold inline-block'>{item.strMeal}</h1>
                            <h1 className=' text-white font-bold'>{item.strArea}</h1>
                            <img src={item.strMealThumb} className='w-[500px] h-[500px] ' alt="" />
                            <img src={item.strSource} alt="" />
                            <a href={item.strSource}>source</a>
                        </div>
                        
                        <div className='grid grid-cols-3'>
                            {/* <Ingrediant/> */}
                            <img src="" alt="" />
                            <a href="">{item.strIngredient1}</a>
                            <a href="">{item.strIngredient2}</a>
                            <a href="">{item.strIngredient3}</a>
                            <a href="">{item.strIngredient4}</a>
                            <a href="">{item.strIngredient5}</a>
                            <a href="">{item.strIngredient6}</a>
                            <a href="">{item.strIngredient7}</a>
                        </div>
                    </div>

                    <div className='w-full mx-auto my-10'>
                        <h3 className='text-center capitalize text-white text-[18px] font-bold mb-3'>Instructions</h3>
                        <p className='text-center text-white font-medium'>{item.strInstructions}</p>
                    </div>
                </div>
            ))
        } 
    </div>
  )
}


