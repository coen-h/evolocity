import imageList from '../assets/imagelist'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

export default function Hero() {
    return (
        <div id="hero">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                id="hero-swiper"
            >
                {imageList.map((image) => (
                    <SwiperSlide key={image}><img id="hero-image" src={image} alt="Hero Image" /></SwiperSlide>
                ))}
                
            </Swiper>
            <p id="hero-title" >Evolocity</p>
            <div id="hero-description"><p>&quot;EVolocity is the EV programme inspiring young Kiwis into sustainable
            engineering while fast forwarding New Zealand’s clean tech future.&quot;</p><a href="https://evolocity.co.nz/" target="_blank" aria-label="Website" > - Evolocity</a></div>
        </div>
    )
}