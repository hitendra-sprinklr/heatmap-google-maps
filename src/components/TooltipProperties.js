// Return a string with the properties of the region

const TooltipProperties = ({ data }) => {
  let str = "";
  for (let i in data) {
    // console.log(i, event.feature.j[i]);
    if (data[i] != null) {
      str += `<div><b><span>${i}</span></b>  :  <span>${data[i]}</span></div>`;
    }
  }

  const d = "<h3>Properties</h3>" + "<hr/>" + str;

  return d;
};

export default TooltipProperties;
