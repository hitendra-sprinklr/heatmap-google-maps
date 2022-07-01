import React, { useEffect, useRef, useState } from "react";
import useData from "../hooks/useData";

const Heatmap = ({ center, zoom }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  //console.log(map);

  // Instantiates and sets up the map
  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          mapTypeId: "OSM",
          streetViewControl: false,
          mapTypeControl: false,
          minZoom: 2,
        })
      );
    }
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
      map.mapTypes.set(
        "OSM",
        new window.google.maps.ImageMapType({
          getTileUrl: function (coord, zoom) {
            return (
              "https://basemaps.cartocdn.com/light_all/" +
              zoom +
              "/" +
              coord.x +
              "/" +
              coord.y +
              ".png"
            );
          },
          tileSize: new window.google.maps.Size(256, 256),
          name: "OpenStreetMap",
          maxZoom: 18,
        })
      );
    }
  }, [ref, map]);

  // Custom hook to add the geojson data to the map
  useData(map);

  return (
    <>
      <div ref={ref} style={{ display: "flex", height: "100%" }} id="map" />
    </>
  );
};

export default Heatmap;
