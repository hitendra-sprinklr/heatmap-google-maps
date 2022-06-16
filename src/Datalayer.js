import { useEffect, useRef, useState } from "react";
import india from "./data/india.json";
import TooltipDetails from "./TooltipDetails";

const Datalayer = ({ map }) => {
  let infoWindow = new window.google.maps.InfoWindow({});

  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      console.log(map);

      map.data.addListener("click", function (event) {
        map.data.overrideStyle(event.feature, { fillColor: "red" });
        const name = event.feature.getProperty("Name");
        const id = event.feature.getProperty("iso");
        const tooltip = TooltipDetails({ name: name, id: id });

        console.log(event);
        infoWindow.setContent(tooltip);
        infoWindow.setPosition(event.latLng);
        infoWindow.open({
          map: map,
          shouldFocus: false,
        });
      });
    }
  }, [map]);

  return null;
};

export default Datalayer;
