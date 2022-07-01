import customData from "../data/customData";
//Returns a random color to fill the region

const getColor = ({ regionName }) => {
  const intensity = customData[regionName].intensity;
  let color;
  if (intensity < 2) color = "rgb(253,222,108)";
  else if (intensity >= 2 && intensity <= 4) color = "rgb(83,193,130)";
  else if (intensity >= 5 && intensity < 9) color = "rgb(152,218,180)";
  else color = "rgb(237,119,90)";

  return color;
};

export default getColor;
