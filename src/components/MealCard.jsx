/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router';



export default function MealCard( { meals } ) {
    const { strMeal, strMealThumb, idMeal} = meals;
    const navigate = useNavigate();

    const handleMealClick = () => {
      // Navigate programmatically to MealPage with idMeal in the state
      navigate(`/${idMeal}`);
    };
    // console.log(idMeal)
  return (
    <div>
          <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl" onClick={handleMealClick}>
                <figure className="px-10 pt-10">
                    <img
                    src={strMealThumb}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  {/* <h1>{idMeal}</h1> */}
                  <h3>{strMeal}</h3>
                </div>
          </div>
        
    </div>
  )
}
