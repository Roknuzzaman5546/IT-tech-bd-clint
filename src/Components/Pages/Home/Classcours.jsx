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
                {
                    cours.map(slid =>
                        <SwiperSlide>
                            <img className='w-80 h-60' src={slid.img} alt="" />
                            <h2 className='text-3xl uppercase text-center  text-black'>{slid.title}</h2>
                            <h2 className=' text-3xl'>{slid.price}</h2>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Classcours;