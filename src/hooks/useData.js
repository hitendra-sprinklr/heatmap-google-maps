import { useEffect } from "react";
import Tooltip from "../components/Tooltip";
import Popup from "../components/Popup";
import getColor from "../components/getColor";

// Importing Geojson files for the required countries

import india from "../data/india.json";
import usa from "../data/usa.json";

const useData = (map) => {
  //Creating infowindow to attach tooltip to the regions

  //Adds geojson data to the map when the map is succesfully loaded

  useEffect(() => {
    if (map) {
      map.data.addGeoJson(india);
      map.data.addGeoJson(usa);

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

      // Event listener which on click displays the Popup over the region you clicked on

      let infoWindow = new window.google.maps.InfoWindow({});
      map.data.addListener("click", function (event) {
        infoWindowhover.close();

        const info = Popup({
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
        const info = Tooltip({ regionName });

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

      // Event listener to close the popup whenever user clicks over the map
      map.addListener("click", function (event) {
        infoWindow.close();
      });
    }
  }, [map]);
};

export default useData;
