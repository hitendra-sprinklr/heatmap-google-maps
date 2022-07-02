// Return a string with the properties of the region

const TooltipProperties = ({ data }) => {
  let info = "";
  let counter = 0;
  for (let i in data) {
    // console.log(i, event.feature.j[i]);
    if (counter === 3) break;
    if (data[i] != null) {
      info += `<div><b><span>${i}</span></b>  :  <span>${data[i]}</span></div>`;
    }
    counter++;
  }

  const details = `<h3>Properties</h3> <hr/> ${info}`;

  return details;
};

export default TooltipProperties;
