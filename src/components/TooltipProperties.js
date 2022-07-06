// Return a string with the properties of the region

const TooltipProperties = ({ data, regionName }) => {
  // let info = "";
  // let counter = 0;
  // for (let i in data) {
  //   // console.log(i, event.feature.j[i]);
  //   if (counter === 3) break;
  //   if (data[i] != null) {
  //     info += `<div><b><span>${i}</span></b>  :  <span>${data[i]}</span></div>`;
  //   }
  //   counter++;
  // }

  const details = `<div><h3>Drilldown</h3> <hr> <b><span>Name</span></b>  :  <span>${regionName}</span></div><b><span>Code</span></b>  :  <span>${data["CODE"]}</span></div>`;

  return details;
};

export default TooltipProperties;
