import  { useState } from 'react'
import { useNavigate } from 'react-router';


export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
        // console.log(e.target.value)
        if (searchTerm.trim()) {
            navigate(`/results?query=${encodeURIComponent(searchTerm)}`);
            // console.log(navigate)
        }
    }
  return (
    <div>
      <div className='w-[400px] mx-auto m-5'>
            <form action="#" onSubmit={handleChange} className="relative">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" value={searchTerm} onChange={ (e)=> setSearchTerm(e.target.value)} className="grow " placeholder="Search For Meals" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                </label>
            </form>
        </div>
    </div>
  )
}
