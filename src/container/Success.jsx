import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import Map from './Map';
import '../style/components/Success.css';

function Success() {
  const [map, setMap] = useState([]);
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = map;

  useEffect(() => {
    const encodedAddress = encodeURIComponent(buyer[0].address);
    const url = `http://api.positionstack.com/v1/forward?access_key=b49650b7e9af1c1c0bd7b99adca3700f&query=${encodedAddress}`;

    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        const { latitude, longitude } = data.data[0];
        const coordinates = [latitude, longitude];
        setMap(coordinates);
        console.log('🚀 ~ file: Success.jsx:32 ~ coordinates:', coordinates); // aqui ya tengo el arreglo
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por su compra`}</h2>
        <span>Tu pedido llegará en 3 días</span>
        <div className="Succes-map">
          {location.length > 0 && <Map data={location} />}
        </div>
      </div>
    </div>
  );
}

export default Success;
