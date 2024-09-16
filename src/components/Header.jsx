import { Link } from "react-router-dom";
// import logo from "../assets/IMG_2176.JPG"



export default function Header() {

  return (
     <div className=" bg-[#23180D]">
         <div className="navbar  w-[80%] mx-auto p-10  bg-[#23180D]">
                <div className="flex-1">

                    <Link to='/'><img src="https://www.themealdb.com/images/logo-small.png" alt="" /></Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                    {/* <SearchBar/> */}
                    <Link to={'/mealPage'}><a className="btn btn-ghost normal-case text-xl">Shop</a></Link>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/455809632_2353575904992904_2352601610104214173_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeGCctZo5cOwWWc3VZPPiusexYk_k9koz-fFiT-T2SjP5z8sdt45l4MGMjwV85w38lhHq2ArWzm2O_6jlGfWa-jI&_nc_ohc=3k3kMEe9yAEQ7kNvgE4Cjan&_nc_ht=scontent.fcgp3-2.fna&_nc_gid=AOsqZLzhDUx0lpW8pJzUxm1&oh=00_AYBh7Frp496Hz5sjJjtC7hLVsWk0VQFMrGT7Q8L2NN682g&oe=66E77DFF" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                 </div>
            </div>

            
            
    </div>
  )
}
