/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';


export default function MealCard( { meals } ) {
    const { strCategory, strCategoryThumb} = meals;
    
  return (
    <div>
      
      <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img
                src={strCategoryThumb}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <Link to={`/meal/${strCategory}`} >{strCategory}</Link>
            </div>
        </div>
    </div>
  )
}
