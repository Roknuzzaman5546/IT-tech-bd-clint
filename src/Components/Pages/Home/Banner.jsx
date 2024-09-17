import { Link } from 'react-router-dom';
import banner from '../../../assets/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero md:h-[600px] h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">IT <span className=' text-blue-600'>Tech</span></h1>
                        <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={'/'}>
                            <button className="butt box font-medium"> See our classes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;