const getStoredProperties = () => {
  const storedProperties = localStorage.getItem('properties');

  if (storedProperties) {
    return JSON.parse(storedProperties);
  }
  return [];
};

const setStoredProperties = (id) => {
  const storedProperties = getStoredProperties();
  const isExist = storedProperties.some((propertyId) => propertyId === id);

  if (!isExist) {
    storedProperties.push(id);
    localStorage.setItem('properties', JSON.stringify(storedProperties));
  }
};

const deleteFromStoredProperties = (id) => {
  const storedProperties = getStoredProperties();
  const newArr = storedProperties.filter((property) => property !== id);
  localStorage.setItem('properties', JSON.stringify(newArr));
};

export { getStoredProperties, setStoredProperties, deleteFromStoredProperties };
