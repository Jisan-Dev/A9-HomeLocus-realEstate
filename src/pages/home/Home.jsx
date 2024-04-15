// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import './home.css';
import { useLoaderData } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const properties = useLoaderData();

  return (
    <div className="w-full container mx-auto overflow-hidden relative pb-32 max-sm:px-3">
      <Helmet>
        <title>Homelocus | Homepage</title>
      </Helmet>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[calc(100vh-78px)] w-full rounded-3xl">
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
          <div className="w-full h-full bg-neutral-900 bg-opacity-60 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Find the perfect place to live with your family
            </h1>
            <p className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Search for a comfortable place to live with your new family and your child. Increase the harmony of your family and wife to be at home.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/register" className="btn font-bold hover:bg-transparent hover:text-white text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn btn-outline hover:bg-white hover:text-slate-800 text-white font-bold text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1494380982332-dfc36fbfece6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
          <div className="w-full h-full bg-neutral-900 bg-opacity-60 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Find the perfect place to live with your family
            </h1>
            <p className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Search for a comfortable place to live with your new family and your child. Increase the harmony of your family and wife to be at home.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/register" className="btn font-bold hover:bg-transparent hover:text-white sm:text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn btn-outline hover:bg-white hover:text-slate-800 text-white font-bold sm:text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
          <div className="w-full h-full bg-neutral-900 bg-opacity-60 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Find the perfect place to live with your family
            </h1>
            <p className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Search for a comfortable place to live with your new family and your child. Increase the harmony of your family and wife to be at home.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/register" className="btn font-bold hover:bg-transparent hover:text-white sm:text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn btn-outline hover:bg-white hover:text-slate-800 text-white font-bold sm:text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <section id="properties" className="mt-32 max-sm:mt-20">
        <header data-aos="fade-zoom-in" data-aos-duration="600" className="font-kufam flex flex-col items-center justify-center mb-5">
          <p className="text-neutral-700 text-base lg:text-lg font-semibold uppercase tracking-[6px] mb-3">| Featured Properties |</p>
          <h2 className="max-w-[690px] text-center text-neutral-950 leading-none text-3xl max-sm:px-2 sm:text-[50px] font-bold">
            Properties for sale & rent in your favorite area
          </h2>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {properties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} />
          ))}
        </main>
      </section>
    </div>
  );
};

export default Home;
