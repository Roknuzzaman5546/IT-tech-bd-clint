import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Classes.css'

const Classes = ({ item }) => {
    const { name, title, img, price, totalEnrolment, _id } = item;

    return (
        <div className=" bg-gray-800 shadow-xl rounded-xl text-white cardC ">
            <div className=" relative">
                <img className=" h-44 relative w-full rounded-t-xl" src={img} alt="Shoes" />
                <div className="absolute bottom-0 top-0 left-0 ml-2 mt-2">
                    <p className=" bg-gray-700 text-white p-1 rounded-md text-xs">$ {price}</p>
                </div>
            </div>
            <div className="mt-2 pl-3 pb-3">
                <h2 className=" text-sm font-bold line-clamp-1 mt-1 hover:text-blue-600 cursor-pointer">{name}</h2>
                <p className="text-xs mt-2">{title}</p>
                <p className="text-xs">Total enroll: {totalEnrolment}</p>
                <button className=" text-sm flex items-center justify-center gap-1 buttn mt-2">
                    Show Details <FaArrowRight></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default Classes;