// Return a string with custom data generated randomly
import customData from "./data/customData";

const TooltipDetails = ({ regionName }) => {
  const insights = customData[regionName].insights;
  const mentions = customData[regionName].mentions;
  const stars = customData[regionName].stars;

  return `<div><h3 >Dropdown</h3><hr/><div><b>Insights</b> : ${insights}</div><div><b>Mentions</b> : ${mentions}</div><div><b>Stars</b> : ${stars}</div></div>`;
};

export default TooltipDetails;
