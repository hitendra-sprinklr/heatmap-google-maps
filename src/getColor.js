import customData from "./data/customData";
//Returns a random color to fill the region

const getColor = ({ regionName }) => {
  const intensity = customData[regionName].intensity;
  let color;
  if (intensity < 3) color = "gray";
  else if (intensity >= 3 && intensity < 5) color = "green";
  else if (intensity >= 5 && intensity < 7) color = "yellow";
  else color = "red";
  return color;
};

export default getColor;
