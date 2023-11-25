import { Link } from "react-router-dom";

const Classes = ({ item }) => {
    const { name, title, img, price, totalEnrolment, id } = item;
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div>
                    <img className=" h-48 relative" src={img} alt="Shoes" />
                    <div className="absolute bottom-0 top-10 left-56">
                        <p className="bg-gray-700 text-white p-1 rounded-md">$ {price}</p>
                    </div>
                </div>
                <div className="mt-5 space-y-2 flex-col items-center">
                    <h2 className=" text-2xl font-bold">{name}</h2>
                    <p>{title}</p>
                    <p>Total enroll: {totalEnrolment}</p>
                    <Link to={`/class/${id}`}><button className="btn btn-primary">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Classes;