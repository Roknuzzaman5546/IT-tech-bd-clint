import partimg1 from '../../../assets/creativeit.jpg'
import partimg2 from '../../../assets/datasoft.png'
import partimg3 from '../../../assets/itclan.jpg'
import partimg4 from '../../../assets/kaz.png'
import Title from '../../Shared/Title';


const Partnership = () => {
    return (
        <div className=' my-10'>
            <Title
            heading={"partership"}
            Subheading={"Our most trusted partnership in our sector"}
            ></Title>
            <div className=' flex justify-center items-center gap-2'>
                <div className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className='w-20 h-20 rounded' src={partimg1} alt="" />
                    <h2>Fueling our vision for cutting-edge technology, creative it brings expertise in [specific industry/technology]. </h2>
                </div>
                <div className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={partimg2} alt="" />
                    <h2>In our pursuit of excellence, we've joined forces with Data soft, a recognized leader in [industry/sector]. .</h2>
                </div>
                <div className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={partimg3} alt="" />
                    <h2>At the heart of our success is the collaboration with IT clan, a trailblazer in [relevant field]. By merging our strengths.</h2>
                </div>
                <div className='text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={partimg4} alt="" />
                    <h2>Dedicated to excellence, Kazi Ltd...stands as a cornerstone in [industry/domain]. Our partnership extends beyond conventional.</h2>
                </div>
            </div>
        </div>
    );
};

export default Partnership;