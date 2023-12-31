import banner from '../../../assets/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero md:min-h-screen h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-rubik font-bold">IT <span className=' text-blue-600'>Tech</span></h1>
                        <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"> See our classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;