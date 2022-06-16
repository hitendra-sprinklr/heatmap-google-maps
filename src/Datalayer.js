import { useEffect, useRef, useState } from "react";
import india from "./data/india.json";

const Datalayer = ({ map }) => {
  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      console.log(map);

      map.data.addListener("click", function (event) {
        map.data.overrideStyle(event.feature, { fillColor: "red" });
      });
    }
  }, [map]);

  return null;
};

export default Datalayer;
