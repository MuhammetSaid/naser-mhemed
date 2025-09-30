import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider2.css"

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1} // varsayılan
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000, // 3 saniyede bir otomatik kaydır
                disableOnInteraction: false, // kullanıcı dokunsa bile devam etsin
            }}
            breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="main-side2">
                تمثيل الملف السوري في محافل دولية واجتماعات إقليمية
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side2">
                    الإشراف على فرق عمل واسعة العدد ومتنوعة الاختصاصات  
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side2">
                المشاركة في تأسيس برامج إنسانية وتنموية لخدمة ملايين المستفيدين
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side2">
                    
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
