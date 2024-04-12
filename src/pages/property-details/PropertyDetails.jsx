import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id: paramId } = useParams();

  const properties = useLoaderData();

  const property = properties.find((property) => property.id === Number(paramId));

  console.log(property);

  return (
    <div>
      <h1>
        PROPERTY : <strong>{property.estate_title}</strong>
      </h1>
    </div>
  );
};

export default PropertyDetails;
