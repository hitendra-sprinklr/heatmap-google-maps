import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Heatmap from "./Heatmap";

const Map = () => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <div className="container">
      <Wrapper apiKey={"AIzaSyA9ZNsaoAQW1R8UlO8jaTb767HHNu80QJA"}>
        <Heatmap center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
};

export default Map;
