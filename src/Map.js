import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ErrorComponent from "./ErrorComponent";
import Heatmap from "./Heatmap";
import LoadingComponent from "./LoadingComponent";

const render = (status) => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  if (status === Status.LOADING) return <LoadingComponent />;
};

const Map = () => {
  const center = { lat: 23.85, lng: 77.6 };
  const zoom = 4;

  return (
    <div className="container">
      <Wrapper
        apiKey={"AIzaSyA9ZNsaoAQW1R8UlO8jaTb767HHNu80QJA"}
        render={render}
      >
        {/* Setting up the Map to display on the screen with given center and zoom */}
        <Heatmap center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
};

export default Map;
