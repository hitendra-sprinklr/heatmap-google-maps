import React, { useEffect, useRef, useState } from "react";
import useData from "./useData";

const Heatmap = ({ center, zoom }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  //console.log(map);

  // Instantiates and sets up the map
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
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
