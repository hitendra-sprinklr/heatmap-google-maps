const colors = ["green", "yellow", "red", "gray", "red"];

//Returns a random color to fill the region

const getColor = () => {
  const len = colors.length;
  return colors[Math.floor(Math.random() * len)];
};

export default getColor;
