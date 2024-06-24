import React, { useState, useEffect } from "react";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import axios from 'axios';

export function Header() {
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
            params: {
              lat: latitude,
              lon: longitude,
              format: 'json'
            }
          });
          const city = response.data.address.city;
          const state = response.data.address.state;
          setLocation(`${city}, ${state}`);
        } catch (error) {
          console.error("Error fetching location data:", error);
          setLocation("Location not found");
        }
      }, (error) => {
        console.error("Error getting geolocation:", error);
        setLocation("Location not found");
      });
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <header className="py-8 flex justify-between items-center  font-roboto">
      <span>
        <img src="src/assets/Logo.png" alt="Logo" />
      </span>
      <aside className="flex gap-3 justify-center items-center">
        <div className="flex p-2 gap-1 bg-produto-purple-light justify-center items-center rounded-md">
          <MapPin className="text-produto-purple-dark size-5" weight="fill" />
          <p className="text-sm text-produto-purple-dark font-normal">
            {location}
          </p>
        </div>
        <div className="flex justify-center items-center rounded-sm bg-produto-yellow-light p-2">
          <ShoppingCart className="size-5 text-produto-yellow-dark" weight="fill"/>
        </div>
      </aside>
    </header>
  );
}
