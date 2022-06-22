import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Datalayer from "./Datalayer";
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
        <Heatmap center={center} zoom={zoom}>
          {/* <Datalayer /> */}
        </Heatmap>
      </Wrapper>
    </div>
  );
};

export default Map;
