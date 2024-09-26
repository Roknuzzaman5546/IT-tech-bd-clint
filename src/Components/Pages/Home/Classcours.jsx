import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FreeMode, Pagination } from 'swiper/modules';
import Title from '../../Shared/Title';


const Classcours = () => {
    const [cours, setCours] = useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setCours(data))
    }, [])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



    return (
        <div className=' my-20'>
            <Title
                heading={"Classes & courses"}
                Subheading={"This is our mos popular class"}
            ></Title>
            <Swiper
                breakpoints={{
                    500: {
                        width: 550,
                        slidesPerView: 1,
                    },
                    800: {
                        width: 550,
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                modules={[Autoplay]}
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
                            </SwiperSlide>

                        )
                    }
                </div>
                <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Classcours;