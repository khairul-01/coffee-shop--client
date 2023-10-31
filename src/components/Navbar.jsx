import { NavLink } from "react-router-dom";


const Navbar = () => {
   return (
      <div className="flex justify-center">
         <div className="space-x-4">
            <NavLink to='/'><button>Home</button></NavLink>

            <NavLink to='/addCoffee'>Add Coffee</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='users2'>Users2</NavLink>
            <NavLink to='/signin'>Sign In</NavLink>
            <NavLink to='signup'>Register</NavLink>
         </div>

      </div>
   );
};

export default Navbar;