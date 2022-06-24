import { useEffect, useRef, useState } from "react";
import india from "./data/india.json";
import usa from "./data/china.json";
import china from "./data/usa.json";
import japan from "./data/japan.json";
import spain from "./data/spain.json";
import mexico from "./data/mexico.json";
import brazil from "./data/brazil.json";
import canada from "./data/canada.json";
import russia from "./data/russia.json";
import australia from "./data/australia.json";
import uk from "./data/uk.json";
import newZealand from "./data/newZealand.json";
import california from "./data/california.json";
import france from "./data/france.json";
import TooltipDetails from "./TooltipDetails";
import TooltipProperties from "./TooltipProperties";

const useData = (map) => {
  let infoWindow = new window.google.maps.InfoWindow({});

  const colors = ["green", "yellow", "red", "gray", "red"];

  const getColor = () => {
    const len = colors.length;
    return colors[Math.floor(Math.random() * len)];
  };

  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      map.data.addGeoJson(china);
      map.data.addGeoJson(usa);
      map.data.addGeoJson(japan);
      map.data.addGeoJson(spain);
      map.data.addGeoJson(mexico);
      map.data.addGeoJson(brazil);
      map.data.addGeoJson(canada);
      map.data.addGeoJson(uk);
      map.data.addGeoJson(australia);
      map.data.addGeoJson(california);
      map.data.addGeoJson(newZealand);
      map.data.addGeoJson(russia);
      map.data.addGeoJson(france);

      map.data.setStyle(function (feature) {
        return {
          fillColor: getColor(),
          fillOpacity: 0.3,
          strokeWeight: 1,
        };
      });

      map.data.addListener("click", function (event) {
        // const name = event.feature.getProperty("Name");
        // const id = event.feature.getProperty("iso");
        // const tooltip = TooltipDetails({ name: name, id: id });

        const info = TooltipProperties({ data: event.feature.j });

        //console.log(event);
        infoWindow.setContent(info);
        infoWindow.setPosition(event.latLng);
        infoWindow.open({
          map: map,
          shouldFocus: false,
        });
      });

      map.data.addListener("mouseover", function (event) {
        const d = TooltipDetails();

        //console.log(event);
        infoWindow.setContent(d);
        infoWindow.setPosition(event.latLng);
        infoWindow.open({
          map: map,
          shouldFocus: false,
        });
      });
    }
  }, [map]);
};

export default useData;
