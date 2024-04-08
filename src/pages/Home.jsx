// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className="w-full container mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[calc(100vh-78px)] w-full rounded-3xl">
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1590411585839-e8c119cb393a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
          <div className="w-full h-full bg-neutral-900 bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-6xl font-bold text-center max-w-5xl">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit. Nisi, ipsa.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
