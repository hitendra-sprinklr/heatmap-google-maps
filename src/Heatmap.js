import { useEffect, useRef, useState } from "react";

const Heatmap = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    console.log(ref);
  });

  return <div ref={ref} id="map" style={{ display: "flex", height: "100%" }} />;
};

export default Heatmap;
