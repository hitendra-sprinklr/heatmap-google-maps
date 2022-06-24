import { useEffect, useRef, useState } from "react";
import TooltipDetails from "./TooltipDetails";
import TooltipProperties from "./TooltipProperties";
import getColor from "./getColor";

// Importing Geojson files for the required countries

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

const useData = (map) => {
  //Creating infowindow to attach tooltip to the regions

  let infoWindow = new window.google.maps.InfoWindow({});

  //Adds geojson data to the map when the map is succesfully loaded

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

      // Sets the style for each region over the map where feature can be used to access properties of that particular region of geojson data

      map.data.setStyle(function (feature) {
        return {
          fillColor: getColor(),
          fillOpacity: 0.3,
          strokeWeight: 1,
        };
      });

      // Event listener which on click displays the properties of the region you clicked on

      map.data.addListener("click", function (event) {
        const info = TooltipProperties({ data: event.feature.j }); // event.feature.j represents an object holding the properties of the clicked region of geojson data

        //console.log(event);
        infoWindow.setContent(info); // Sets the content of the infowindow
        infoWindow.setPosition(event.latLng); // Sets the position of the infowindow over the map
        infoWindow.open({
          map: map,
          shouldFocus: false,
        });
      });

      // Event listener which on hover displays the Custom data (Insights,mentions,stars)

      map.data.addListener("mouseover", function (event) {
        const info = TooltipDetails();

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
};

export default useData;
