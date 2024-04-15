import { useLoaderData } from 'react-router-dom';
import { deleteFromStoredProperties, getStoredProperties, setStoredProperties } from '../../utils/localstorage';
import { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';

const Wishlist = () => {
  const allProperties = useLoaderData();
  const [properties, setProperties] = useState([]);
  const [removeClicked, setRemoveClicked] = useState(false);

  useEffect(() => {
    const storedProperties = getStoredProperties();
    const listProperties = allProperties.filter((property) => storedProperties.includes(property.id));
    setProperties(listProperties);
  }, [allProperties, removeClicked]);

  const deleteFunc = (id) => {
    deleteFromStoredProperties(id);
    setRemoveClicked(!removeClicked);
  };

  return (
    <section>
      <header className="font-kufam flex flex-col items-center justify-center mb-5">
        <p className="text-neutral-700 text-base lg:text-lg font-semibold uppercase tracking-[6px] mb-3">| Wishlist Properties |</p>
        <h2 className="max-w-[690px] text-center text-neutral-950 leading-none text-3xl max-sm:px-2 sm:text-[50px] font-bold">Properties for sale & rent in your favorite area</h2>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} isDelete={true} deleteFunc={deleteFunc} />
        ))}
      </main>
    </section>
  );
};

export default Wishlist;
