import { Link } from 'react-router-dom';
import teachingimg from '../../../assets/teacher-diversity.jpg'

const Teaching = () => {
    return (
        <div className=' flex lg:flex-row flex-col items-center justify-between gap-5 my-10'>
            <div className=' '>
                <img className=' w-[1000px] rounded-md shadow-lg' src={teachingimg} alt="" />
            </div>
            <div className=' text-center w-full space-y-2' >
                <h2 className=' font-bold text-5xl font-rancho '>Teach our site</h2>
                <p>I am writing to express my interest in the [subject/grade level] teaching position at [School's Name], as advertised. With a strong educational background, relevant teaching experience, and a passion for [subject], I am confident in my ability to contribute effectively to your school.
                    I hold a [Degree] in [Your Field] from [University], and I am [certification status]. My student teaching experience at [Previous School] equipped me with the skills and knowledge necessary to create a positive and stimulating learning environment. I am adept at designing engaging lesson plans that
                </p>
                <Link to="/techon"><button className=' mt-2 btn btn-info
                '>Start teaching today</button></Link>
            </div>
        </div>
    );
};

export default Teaching;