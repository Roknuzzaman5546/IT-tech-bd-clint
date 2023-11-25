import { Link } from 'react-router-dom';
import errorimg from '../../../assets/404.gif'

const Eroor = () => {
    return (
        <div>
            <img src={errorimg} alt="" /> 
            <Link to='/'><button className=' btn btn-accent'>GO home</button></Link>
        </div>
    );
};

export default Eroor;