import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, className = '', children, ...props }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 font-bold leading-5 transition duration-150 ease-in-out focus:outline-none ml-2 ' +
                (isActive
                    ? 'border-indigo-400 focus:border-indigo-700 text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
            {...props}
        >
            {children}
        </Link>
    );
}
