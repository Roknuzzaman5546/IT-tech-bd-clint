import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Title from '../../Shared/Title';


const Classcours = () => {
    const [cours, setCours] = useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setCours(data))
    }, [])


    return (
        <div className=' my-20'>
            <Title
                heading={"Classes & courses"}
                Subheading={"This is our mos popular class"}
            ></Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <div>
                    {
                        cours.map(slid =>
                            <SwiperSlide key={slid.title}>
                                <div className=' bg-gray-800 rounded-lg pt-3 pb-2 flex flex-col gap-2 items-center text-white'>
                                    <img className='w-60 h-60' src={slid.img} alt="" />
                                    <h2 className='text-xs text-white font-bold uppercase text-center'>{slid.title}</h2>
                                    <h2 className='text-xs font-bold'>{slid.price} $</h2>
                                </div>
                            </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Classcours;