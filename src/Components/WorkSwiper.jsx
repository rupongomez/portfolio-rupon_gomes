// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const works = [
    {
        "img": "https://i.ibb.co.com/jZrxTGrS/new-2017-imac-pro-dark-grey-front.png",
        "website_url": "https://plantnet-d1f24.web.app/"
    },
    {
        "img": "https://i.ibb.co.com/7dP9k425/bistroboss.webp",
        "website_url": "https://stro-boss-3b7c5.web.app/"
    },
    {
        "img": "https://i.ibb.co.com/Xrj7g806/App-Screen-Mockup.webp",
        "website_url": "https://servease-2ccfe.web.app/"
    },
    {
        "img": "https://i.ibb.co.com/jkMfTB6p/chil.png",
        "website_url": "https://chill-gamer-c45cc.firebaseapp.com/"
    }
]


const WorkSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {works.map(work =>
                    <SwiperSlide>
                        <div>
                            {/* <img className='' src={work.img} alt="" /> */}
                            <a target='_blank' href={work.website_url}><img className='w-[400px] h-[250px] object-cover' src={work.img} alt="" /></a>
                        </div>
                    </SwiperSlide>

                )}
            </Swiper>
        </>
    );
};

export default WorkSwiper;