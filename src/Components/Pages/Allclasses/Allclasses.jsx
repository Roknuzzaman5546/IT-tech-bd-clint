import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Classes from "./Classes";

const Allclasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    courses.map(item => <Classes
                        key={item.id}
                        item={item}
                    ></Classes>)
                }
            </div>
        </div>
    );
};

export default Allclasses;