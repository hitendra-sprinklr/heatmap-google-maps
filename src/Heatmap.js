import React, { useEffect, useRef, useState } from "react";
import useData from "./useData";

const Heatmap = ({ center, zoom, children }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  //console.log(map);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  // This is a custom hook now which adds the data to the map
  useData(map);

  return (
    <>
      <div ref={ref} style={{ display: "flex", height: "100%" }} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Heatmap;
