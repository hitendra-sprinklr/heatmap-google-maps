const TooltipDetails = (props) => {
  return `
      <div className="tooltip">
        <h3>Tooltip</h3>
        <hr />
        <div className="country-name">Country : ${props.name}</div>
        <div className="country-iso">ISO-CODE : ${props.id}</div>
      </div>
      `;
};

export default TooltipDetails;
