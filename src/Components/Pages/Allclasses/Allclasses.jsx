import Classes from "./Classes";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Allclasses = () => {
    const axiospublic = useAxiosPublic();
    const { data: classes = [],  } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiospublic.get('/class')
            return res.data;
        }
    })

    return (
        <div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    classes.map(item => <Classes
                        key={item._id}
                        item={item}
                    ></Classes>)
                }
            </div>
        </div>
    );
};

export default Allclasses;