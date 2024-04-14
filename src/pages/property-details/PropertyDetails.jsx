import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { TbHomeCheck } from 'react-icons/tb';
import { Helmet } from 'react-helmet-async';

const PropertyDetails = () => {
  const { id: paramId } = useParams();

  const properties = useLoaderData();

  const property = properties.find((property) => property.id === Number(paramId));

  console.log(property);

  return (
    <div className="flex max-sm:flex-col container mx-auto gap-8 pb-10 w-full max-sm:px-4">
      <Helmet>
        <title>Homelocus | Details : {paramId}</title>
      </Helmet>
      <div className="w-1/2 max-sm:w-full rounded-lg overflow-hidden">
        <img src={property.image} className="h-full object-cover" />
      </div>
      <div className="w-1/2 max-sm:w-full flex flex-col justify-center">
        <h2 className="text-neutral-900 text-opacity-80 text-lg font-medium mb-1 font-kufam">{property.segment_name}</h2>
        <h1 className="text-neutral-900 text-3xl md:text-4xl font-bold mb-4 font-kufam">{property.estate_title}</h1>
        <div className="flex gap-6 items-center font-kufam mb-5">
          <h3 className="text-neutral-900 text-opacity-80 text-2xl font-semibold"> {property.price} </h3>
          <span className="text-sm bg-gray-800 bg-opacity-20 text-neutral-700 rounded-md py-2 px-4 capitalize font-bold font-source">On {property.status}</span>
        </div>
        <p className="text-neutral-900 text-opacity-80 text-base sm:text-lg font-medium mb-8 font-source"> {property.description} </p>
        <p className="text-neutral-900 text-opacity-70 text-base md:text-xl font-semibold mb-2 font-source">
          <strong className="text-neutral-900 font-bold mr-1">Area : </strong> {property.area}
        </p>
        <p className="text-neutral-900 text-opacity-70 text-base md:text-xl font-semibold font-source">
          <strong className="text-neutral-900 font-bold mr-1">Location : </strong> {property.location}
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs flex-wrap font-source">
          <strong className="text-neutral-900 text-base md:text-xl font-bold mr-1">Facilities : </strong>
          {property.facilities.map((facility, index) => (
            <div key={index} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 badge badge-ghost py-4 px-6">
              <TbHomeCheck />

              <div className="mt-1.5 sm:mt-0 ">
                <p className="font-medium text-base md:text-lg">{facility}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
