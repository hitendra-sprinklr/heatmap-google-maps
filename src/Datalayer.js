import { useEffect, useRef, useState } from "react";
import india from "./data/india.json";

const Datalayer = ({ map }) => {
  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      console.log(map);
    }
  }, [map]);

  return null;
};

export default Datalayer;
