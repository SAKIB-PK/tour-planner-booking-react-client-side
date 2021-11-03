// use local storage as your db for now
function useLocalStorage(){
  const setLCStorage = id => {
    const exists = getDb();
    let booking_spot = {};
    if (!exists) {
      booking_spot[id] = 1;
    }
    else {
      booking_spot = JSON.parse(exists);
      if (booking_spot[id]) {
        const newCount = booking_spot[id] +1;
        booking_spot[id] = newCount;
      }
      else {
        booking_spot[id] = 1;
      }
    }
    updateDb(booking_spot);
  }
  
  const getDb = () => localStorage.getItem('booking_spot');
  const updateDb = newCart => {
    localStorage.setItem('booking_spot', JSON.stringify(newCart));
  }
  
  const removeFromLC = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const vaction_spot = JSON.parse(exists);
      delete vaction_spot[id];
      updateDb(vaction_spot);
    }
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheItem = () => {
    localStorage.removeItem('shopping_cart');
  }
  return {
    setLCStorage,
    removeFromLC

  }
}

export default useLocalStorage
