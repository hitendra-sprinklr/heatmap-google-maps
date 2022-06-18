const TooltipProperties = ({ data }) => {
  const info = {};
  for (let i in data) {
    // console.log(i, event.feature.j[i]);
    if (data[i] != null) info[i] = data[i];
  }

  const d =
    "<h3>Tooltip : Region Properties</h3>" + "<hr/>" + JSON.stringify(info);

  return d;
};

export default TooltipProperties;
