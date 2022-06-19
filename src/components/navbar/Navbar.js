import { BiSearch } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const menuData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'New',
    path: '/new',
  },
  {
    name: 'Series',
    path: '/series',
  },
  {
    name: 'Cartoons',
    path: '/cartoons',
  },

]

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5'>
      {/* Logo With Menu Item */}
      <div className="flex gap-10 items-center">
        <Link  className='text-red-600 text-4xl font-bold cursor-pointer' to={"/"}>Netflix</Link>
        <ul className='hidden md:flex gap-4 items-center'>
          {menuData.map(({name, path}) =>(
            <li key={name}>
              <NavLink className="text-sm font-semibold text-gray-300 transition-all duration-300 ease-in-out hover:text-cyan-400" to={path}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Icon */}
      <div className="flex items-center gap-5 cursor-pointer">
        <span>
          <BiSearch size={30} color="#ddd" />
        </span>
        <span>
          <BsFillBellFill size={30} color="#ddd" />
        </span>
      </div>
    </nav>
  )
}

export default Navbar