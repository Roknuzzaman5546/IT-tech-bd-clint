import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, className = '', children, ...props }) => {
    return (
        <RouterNavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                'inline-flex items-center px-1 pt-1 border-b-2 font-bold leading-5 transition duration-150 ease-in-out focus:outline-none ml-2 text-white ' +
                (isActive
                    ? 'border-indigo-400 text-white focus:border-indigo-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300') +
                className
            }
        >
            {children}
        </RouterNavLink>
    );
};

export default NavLink;
