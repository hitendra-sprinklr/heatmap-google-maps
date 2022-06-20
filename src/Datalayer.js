import { useEffect, useRef, useState } from "react";
import india from "./data/india.json";
import usa from "./data/china.json";
import china from "./data/usa.json";
import japan from "./data/japan.json";
import spain from "./data/spain.json";
import TooltipDetails from "./TooltipDetails";
import TooltipProperties from "./TooltipProperties";

const Datalayer = ({ map }) => {
  let infoWindow = new window.google.maps.InfoWindow({});

  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      map.data.addGeoJson(china);
      map.data.addGeoJson(usa);
      map.data.addGeoJson(japan);
      map.data.addGeoJson(spain);
      // console.log(map);

      map.data.addListener("click", function (event) {
        map.data.overrideStyle(event.feature, { fillColor: "red" });
        const name = event.feature.getProperty("Name");
        const id = event.feature.getProperty("iso");
        const tooltip = TooltipDetails({ name: name, id: id });

        const info = TooltipProperties({ data: event.feature.j });

        //console.log(event);
        infoWindow.setContent(info);
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
