import { useEffect } from "react";
import TooltipDetails from "../components/TooltipDetails";
import TooltipProperties from "../components/TooltipProperties";
import getColor from "../components/getColor";

// Importing Geojson files for the required countries

import india from "../data/india.json";
import usa from "../data/usa.json";

//import china from "./data/china.json";
// import japan from "./data/japan.json";
// import spain from "./data/spain.json";
// import mexico from "./data/mexico.json";
// import brazil from "./data/brazil.json";
// import canada from "./data/canada.json";
// import russia from "./data/russia.json";
// import australia from "./data/australia.json";
// import uk from "./data/uk.json";
// import newZealand from "./data/newZealand.json";
// import california from "./data/california.json";
// import france from "./data/france.json";

const useData = (map) => {
  //Creating infowindow to attach tooltip to the regions

  //Adds geojson data to the map when the map is succesfully loaded

  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      // map.data.addGeoJson(china);
      map.data.addGeoJson(usa);
      // map.data.addGeoJson(japan);
      // map.data.addGeoJson(spain);
      // map.data.addGeoJson(mexico);
      // map.data.addGeoJson(brazil);
      // map.data.addGeoJson(canada);
      // map.data.addGeoJson(uk);
      // map.data.addGeoJson(australia);
      // map.data.addGeoJson(california);
      // map.data.addGeoJson(newZealand);
      // map.data.addGeoJson(russia);
      // map.data.addGeoJson(france);

      // Sets the style for each region over the map where feature can be used to access properties of that particular region of geojson data

      map.data.setStyle(function (feature) {
        const regionName = feature.getProperty("name");
        return {
          fillColor: getColor({ regionName }),
          fillOpacity: 0.75,
          strokeWeight: 1,
          strokeColor: "white",
        };
      });

      // Event listener which on click displays the properties of the region you clicked on

      let infoWindow = new window.google.maps.InfoWindow({});
      map.data.addListener("click", function (event) {
        infoWindowhover.close();

        const info = TooltipProperties({
          data: event.feature.j,
          regionName: event.feature.getProperty("name"),
        }); // event.feature.j represents an object holding the properties of the clicked region of geojson data

        //console.log(event);
        infoWindow.setContent(info); // Sets the content of the infowindow
        infoWindow.setPosition(event.latLng); // Sets the position of the infowindow over the map
        infoWindow.open({
          map: map,
          shouldFocus: false,
        });
      });

      // Event listener which on hover displays the Custom data (Insights,mentions,stars)
      let infoWindowhover = new window.google.maps.InfoWindow({});
      map.data.addListener("mouseover", function (event) {
        const regionName = event.feature.getProperty("name");
        const info = TooltipDetails({ regionName });

        //console.log(event);
        infoWindowhover.setContent(info);
        infoWindowhover.setPosition(event.latLng);
        infoWindowhover.open({
          map: map,
          shouldFocus: false,
        });
      });

      // Event listener which moving out of hover area closes the hover tooltip
      map.data.addListener("mouseout", function (event) {
        infoWindowhover.close();
      });

      map.addListener("click", function (event) {
        infoWindow.close();
      });
    }
  }, [map]);
};

export default useData;
