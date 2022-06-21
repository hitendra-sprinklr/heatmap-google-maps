const TooltipDetails = () => {
  const insights = Math.floor(Math.random() * 100).toString();
  const mentions = Math.floor(Math.random() * 200).toString();
  const stars = Math.floor(Math.random() * 1000).toString();

  return `<div><h3 >Dropdown</h3><hr/><div><b>Insights</b> : ${insights}</div><div><b>Mentions</b> : ${mentions}</div><div><b>Stars</b> : ${stars}</div></div>`;
};

export default TooltipDetails;
