import { useLoaderData, useParams } from "react-router-dom";
import Title from "../../Shared/Title";



const Dashclassdetails = () => {
    const courses = useLoaderData();
    const { id } = useParams();
    const cours = courses.find(item => item._id === id)
    console.log(cours)

    return (
        <div>
            <Title
                heading={'Details'}
                Subheading={'Details your class'}
            >
            </Title>
            <div className=" my-10 flex md:flex-row flex-col justify-between gap-5 items-center">
                <div className=" w-full">
                    <img className="" src={cours.img} alt="" />
                    <p className=" font-bold italic mt-2 w-4/6"><span className=" text-gray-800 text-xl font-bold">Details: </span>{cours.shortDescription}</p>
                </div>
                <div className=" border-2 w-full  border-gray-500 p-5 rounded-md">
                    <h2 className=" text-2xl font-bold text-sky-500 "> {cours.title}</h2>
                    <h2 className=" text-2xl font-bold text-orange-500 ">Name: {cours.name}</h2>
                    <p className=" font-bold">Price: {cours.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashclassdetails;