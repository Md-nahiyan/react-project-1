import { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function Results() {

    const [results, setResults] = useState([]);
    // const [found, setFound] = useState(false);
    const location = useLocation();
    // console.log(location)
    const query = new URLSearchParams(location.search).get("query");
    // console.log(query);

    useEffect( ()=> {
        async function fetchData() {
            try {
              // Mock API call (replace this with your actual fetch logic)
              const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
              const json = await data.json();
              console.log(json.meals);
              setResults(json.meals); // Assuming 'items' is the array of results returned by the API
            } catch (error) {
              console.error('Error fetching results:', error);
            }
          }
      
          if (query) {
            fetchData();
          }
        //   if (found) {
        //     return <h1>No data found</h1>;
        //   }

    },[query]);

  return (
    <div className='w-[90%] mx-auto grid grid-cols-4 gap-5'>
      {
        !results ? <h1 className='text-3xl text-center text-white p-10 font-bold capitalize h-[550px]'>No data found</h1> :
            
        results.map( (item, index) => (
            <div className="card bg-base-100 w-96 shadow-xl hover:shadow-4xl" key={index}>
            <figure className="px-10 pt-10">
                <img
                src={item.strMealThumb}
                alt="Shoes"
                className="w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <a href="#" className="card-title">{item.strMeal}</a>       
                <a href={item.strYoutube} className='card-title'>View on Youtube</a>
            </div>
        </div>
        ))
      }
    </div>
  )
}
