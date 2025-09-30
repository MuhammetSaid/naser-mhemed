import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./ReactCardSlider.css"

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3} // varsayılan
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3500, // 3.5 saniyede bir otomatik kaydır
                disableOnInteraction: false, // kullanıcı dokunsa bile devam etsin
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                900: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
        >
            <SwiperSlide>
                <div className="main-side" onClick={() => { window.location.hash = `?content=${encodeURIComponent('الصحة والتعليم')}&image=${encodeURIComponent('https://i.imgur.com/VSSVqDp.jpeg')}` }} style={{cursor: 'pointer'}}>
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/Uy4OZgn.jpeg" alt="" />
                    </div>
                    <div className="text-dev" style={{direction: "rtl", paddingTop: "20px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center", padding: "0 10px"}}>
                        <h2 style={{textAlign: "center"}}> الصحة والتعليم</h2>
                        <h4 style={{textAlign: "center", marginTop: "10px"}}>توفير خدمات صحية وتعليمية عالية الجودة لكل المواطنين.</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side" onClick={() => { window.location.hash = `?content=${encodeURIComponent('التنمية والعدالة الاجتماعية')}&image=${encodeURIComponent('https://i.imgur.com/TSUShqf.jpeg')}` }} style={{cursor: 'pointer'}}>
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/NURXw2N.jpeg" alt="" />
                    </div>
                    <div className="text-dev">
                        <div className="text-dev" style={{direction: "rtl", paddingTop: "20px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center", padding: "0 10px"}}>
                            <h2 style={{textAlign: "center"}}>التنمية والعدالة الاجتماعية</h2>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>تعزيز التنمية الاقتصادية وضمان العدالة الاجتماعية للجميع.</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side" onClick={() => { window.location.hash = `?content=${encodeURIComponent('الخدمات والبنية التحتية')}&image=${encodeURIComponent('https://i.imgur.com/UBvK4IM.jpeg')}` }} style={{cursor: 'pointer'}}>
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/EkqxK5P.jpeg" alt="" />
                    </div>
                    <div className="text-dev">
                        <div className="text-dev" style={{direction: "rtl", paddingTop: "20px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center", padding: "0 10px"}}>
                            <h2 style={{textAlign: "center"}}>الخدمات والبنية التحتية</h2>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>تحسين الخدمات العامة وتطوير البنية التحتية بكفاءة.</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side" onClick={() => { window.location.hash = `?content=${encodeURIComponent('دعم المجتمع')}&image=${encodeURIComponent('https://i.imgur.com/opJe8qb.jpeg')}` }} style={{cursor: 'pointer'}}>
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/26xStos.jpeg" alt="" />
                    </div>
                    <div className="text-dev">
                        <div className="text-dev" style={{direction: "rtl", paddingTop: "20px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center", padding: "0 10px"}}>
                            <h2 style={{textAlign: "center"}}>دعم المجتمع</h2>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>تمكين المجتمع المحلي ودعم المبادرات والمشاريع المجتمعية.</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
