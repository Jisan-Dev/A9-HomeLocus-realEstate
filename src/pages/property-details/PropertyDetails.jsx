import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id: paramId } = useParams();

  const properties = useLoaderData();

  const property = properties.find((property) => property.id === Number(paramId));

  console.log(property);

  return (
    <div className="flex container mx-auto gap-5 pb-10">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <img src={property.image} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="text-neutral-900 text-opacity-80 text-lg font-medium mb-1 font-kufam">{property.segment_name}</h2>
        <h1 className="text-neutral-900 text-4xl font-bold mb-4 font-kufam">{property.estate_title}</h1>
      </div>
    </div>
  );
};

export default PropertyDetails;
